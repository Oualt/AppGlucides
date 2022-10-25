<?php

/* (100 / glu pour 100) * glu voulu = gr à prendre

(Glucides pour 100 / 100) * gr disponibles = glucides */

?>

<html>

<body>

    <form action="GetGr.php" method="post">
        <input type="submit" name="my_form_submit_button" value="Connaitre le nombre de grammes" />
    </form>
    <form action="GetGlu.php" method="post">
        <input type="submit" name="my_form_submit_button" value="Connaitre le nombre de glucides" />
    </form>
    <form action="doses.php" method="post">
        <input type="submit" name="my_form_submit_button" value="Connaitre le nombre d'unités à prendre" />
    </form>

    <!-- <form action="answer.php" method="post">
        <input name="GluPour100" value="Glu pour 100 gr" />
        <input name="GrVoulus" value="Gr voulus" />

        <input type="submit" name="my_form_submit_button" value="Valider" />

    </form> -->
</body>

</html>