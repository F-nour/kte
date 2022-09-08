<?php

namespace App\Components;

use Symfony\UX\TwigComponent\Attribute\AsTwigComponent;

#[AsTwigComponent('error')]
class ErrorComponent
{
    public string $content;
}
