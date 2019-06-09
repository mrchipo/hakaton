<?php $title="Hakaton"; require("./shared/header.php"); ?>
    <div class="container content">
        <div class="col-sm-6 interactive_block"> 
            <div class="progressContainer">
            </div>
            <p id="interactiveTitle">Title</p>
            <div>
                <input type="checkbox" name="interactiveCheckbox">
                <label for="interactiveCheckbox" class="interactiveHint">Дві фотокартки розміром 3 см х 4 см</label>
            </div>
        </div>
        <script type="text/javascript" src="../js/interactive.js"></script>
<?php  require("./shared/footer.php"); ?>