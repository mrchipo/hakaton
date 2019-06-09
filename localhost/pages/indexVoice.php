<?php $title="Voice"; require("./shared/header.php"); ?>
    <div class="container">
      <div class="row">
        <div class="col-sm-offset-3 col-sm-6">
          <section class="panel panel-danger">
            <div class="panel-heading">
              <br>
              <h3 class="panel-title">
                Голосование
              </h3>
            </div>
            <div class="panel-body">
            
              <!-- HTML-структура голосовалки -->
              <div class="question"></div>
              <hr>
              <div id="vote-section">              
                <form id="vote" action="./pages/poll-vote.php" method="POST">
                  <div class="answers"></div>
                  <button type="submit" class="btn btn-default" disabled="disabled">Голосовать</button>
                </form>
              </div>
              <!-- конец HTML-структура -->
              
            </div>
          </section>
        </div>
      </div>    
    </div>
    <br>
    <br>
    <br>
    <?php  require("./shared/footer.php"); ?>

    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    <script src="js/jquery-1.12.4.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    
    <script>
      $(function(){
      
        var pathToPolls = './pages/polls.php';
        
        var vote = {};
        $.get(pathToPolls, function(data) {
          
          var data = JSON.parse(data);
          vote['id']=data['id'];
          vote['question']=data['question'];
          vote['answers']=data['answers'];

          if (data.hasOwnProperty('result')) {
            $('#vote').parent().parent().find('.question').text(vote['question']);
            var _answers = vote['answers'];
            var output = '';
            var result = data['result'];
            var totalvotes = 0;
            for (var i=0; i <= result.length-1; i++) {
              totalvotes += result[i];
            }
            for (var i=0; i <= result.length-1; i++) {
              output += '<p style="margin:0px;">'+_answers[i]+'</p>'+
                '<p class="text-right" style="margin:0px;"><b>'+((result[i]/totalvotes)*100).toFixed(1)+'%</b> (Голосов: '+result[i]+')</p>'+
                '<div class="progress">'+
                  '<div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="'+(result[i]/totalvotes)*100+'" aria-valuemin="0" aria-valuemax="100" style="width: '+(result[i]/totalvotes)*100+'%">'+
                    '<span class="sr-only">'+(result[i]/totalvotes)*100+'%</span>'+
                  '</div>'+
                '</div>'+'<br>';
                
            }
            $('#vote-section').html(output);
          } else {          
            processPoll();
          }
        });    

        var processPoll = function() {        
          var _id = vote['id'];
          var _answers = vote['answers'];
          var form = $('#vote');
          form.parent().parent().find('.question').text(vote['question']);
          form.prepend('<input type="hidden" name="count" value="'+vote['answers'].length+'">');
          form.prepend('<input type="hidden" name="id" value="'+vote['id']+'">');
          var answers = form.find('.answers');
          for (var i=0; i<=vote['answers'].length-1;i++) {
            answers.append('<div class="radio">'+
                '<label>'+
                  '<input type="radio" name="poll" value="'+(i+1)+'">'+
                  vote['answers'][i]+
                '</label>'+
              '</div>');
          }
          if (form.find('button[type="submit"]:disabled')) { 
            form.find('input[type="radio"]').click(function(){
              form.find('button[type="submit"]').prop('disabled',false);
              form.find('input[type="radio"]').off('click');  
            });          
          };
          
          form.submit(function(e) {
            //отмена действия по умолчанию для кнопки submit
            e.preventDefault();
            $.post(form.attr('action'), form.serializeArray(), function(data) {
              if (data) {
                var data = JSON.parse(data);
                var output = '';
                var result = data[_id];
                var totalvotes = 0;
                for (var i=0; i <= result.length-1; i++) {
                  totalvotes += result[i];
                }
                for (var i=0; i <= result.length-1; i++) {
                  output += '<p style="margin:0px;">'+_answers[i]+'</p>'+
                    '<p class="text-right" style="margin:0px;"><b>'+((result[i]/totalvotes)*100).toFixed(1)+'%</b> (Голосов: '+result[i]+')</p>'+
                    '<div class="progress">'+
                      '<div class="progress-bar progress-bar-info progress-bar-striped" role="progressbar" aria-valuenow="'+(result[i]/totalvotes)*100+'" aria-valuemin="0" aria-valuemax="100" style="width: '+(result[i]/totalvotes)*100+'%">'+
                        '<span class="sr-only">'+(result[i]/totalvotes)*100+'%</span>'+
                      '</div>'+
                    '</div>';
                }
                $('#vote-section').html(output);
              }
            }); 
          });
        };

      });
    </script>

  