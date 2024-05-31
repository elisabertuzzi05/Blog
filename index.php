<?php
// Simula il recupero degli articoli da un database
$articles = [
    [
        'title' => 'Come prendersi cura del tuo gatto',
        'content' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque in tincidunt orci.'
    ],
    [
        'title' => 'I migliori giochi per gatti',
        'content' => 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.'
    ],
    [
        'title' => 'Cosa fare se il tuo gatto si ammala',
        'content' => 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    ]
];

// Restituisce gli articoli in formato JSON
header('Content-Type: application/json');
echo json_encode($articles);
?>
