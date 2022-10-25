<?php
//include('index.php');
//include('GetGlu.php');
//include('GetGr.php');
//include('doses.php');

function GetGlu($glu100, $grVoulu)
{
    $formule = ($glu100 / 100) * $grVoulu;
    return $formule;
};

function GetGr($glu100, $gluVoulu)
{
    $formule = (100 / $glu100) * $gluVoulu;
    return $formule;
};

function Doses($taux)
{
    $formule = ($taux * 3) + 1;
    return $formule;
};

// or $_POST['GrVoulus'] == "" or is_int($_POST['GrVoulus'])

if (isset($_POST['GetGlu_button'])) {
    $result = GetGlu($_POST['GluPour100'], $_POST['GrVoulus']);
    echo "Pour les " . $_POST['GrVoulus'] . " grammes voulus, tu auras " . $result . " glucides.";
}
// ---
else if (isset($_POST['GetGr_button'])) {
    $result = GetGr($_POST['GluPour100'], $_POST['GluVoulus']);
    echo "Pour les " . $_POST['GluVoulus'] . " glucides voulus, tu dois prendre " . $result . " grammes.";
} else if (isset($_POST['doses_button'])) {
    // ----
    $result = Doses($_POST['Taux']);
    echo "Ton taux est de " . $_POST['Taux'] . ". Tu dois prendre " . $result . " unités.";
} else {
    echo "Erreur, revenir au menu : ";
};
?>

<form action="index.php" method="post">
    <br><br>
    <br><br>
    <br><br>
    <input type="submit" name="my_form_submit_button" value="Revenir au menu" />

</form>