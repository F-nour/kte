<?php

namespace App\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent('title')]
class TitleComponent
{
    public string $classname;
    public string $id;
    public string $content;
}
