<template>
<Project
    homepage="http://dqe.sourceforge.net"
    :screenshots="screenshots"
>
<p>
    Dizzy Quest Editor (DQE) is an advanced all-in-one
    <ExtLink href="https://en.wikipedia.org/wiki/Dizzy_(series)">Dizzy</ExtLink>-style
    2D adventure game development environment.
</p>
<p>
    Main features:
</p>
<ul>
    <li>
        Integrated developement environment lets you
        edit objects, dialogs, music and other stuff within one application.
    </li>
    <li>
        Very simple and intuitive interface will not scare beginners in game-making.
        DQE supports drag&amp;drop, so you can easily design your levels/screens
        by simply dragging objects from the Object Inspector to the game screen.
    </li>
    <li>
        The Editor brings the most of 2D graphics (alpha-channel, anti-aliasing, blending)
        and sound (reverberation, echo, etc.).
    </li>
    <li>
        Delphi-based scripting system allows you to achieve almost anything
        since it lets you control every single aspect of your game: objects, sounds, etc.
        For example, you can script dialogs to make them non-linear.
    </li>
</ul>
<p>
    Visit the <ExtLink href="http://dqe.sourceforge.net">DQE homepage</ExtLink>
    to get more information, techinical data and screenshots.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'general',
    label: 'General view'
}, {
    name: 'scripts',
    label: 'Scripts editor'
}, {
    name: 'player',
    label: 'Quest Player'
}]
</script>
