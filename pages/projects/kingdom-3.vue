<template>
<Project
    :screenshots="screenshots"
>
<p>
    Kingdom 3 is a strategy game that takes place in a medieval age.
    You're the governor of a small ancient agricultural country.
    You have people, you have land, you even have ships.
    Your mission is to live 100 years (!) without losing all your people.
    To make it to the end you'll have to use various strategies to keep your people safe and happy.
    However, your envious neighbours will not let your life to flow so easily.
    You can either fight them or make deals with them, it's up to you.
    There are also a lot of random encounters and issues rising up from time to time,
    such as rodent invasion, plague epidemy or even an iron-fall.
    Also keep in mind, that humans usually don't live for 100 years,
    so you must solve this problem too, somehow.
</p>
<p>
    The history of this game is pretty interesting.
    It all started in 1964 with "The Sumerian Game" for
    <ExtLink href="https://en.wikipedia.org/wiki/IBM_7090">IBM 7090</ExtLink>.
    There's a reference to this game in
    <ExtLink href="https://eric.ed.gov/?id=ED014227">this publication</ExtLink> (see chapter 4).
    This game inspired a similar game - "The Sumer Game" made in 1968 for
    <ExtLink href="https://en.wikipedia.org/wiki/PDP-8">PDP-8</ExtLink>.
    The official information about this game is almost nowhere to be found,
    and the only mention of this game is in the
    <ExtLink href="https://www.webcitation.org/6f6xOaF52">"DECUS Program Library Catalog for PDP-8, FOCAL8" publication</ExtLink>
    (search for "The Sumer Game").
    The extended version of "The Sumer Game" was developed in 1971 and later renamed to
    <ExtLink href="https://en.wikipedia.org/wiki/Hamurabi_(video_game)">"Hamurabi"</ExtLink>.
    This is the first version to run on personal computers, e.g.
    <ExtLink href="https://en.wikipedia.org/wiki/Atari_8-bit_family">Atari</ExtLink>
    (see this <ExtLink href="https://www.atariarchives.org/basicgames/showpage.php?page=78">"BASIC Computer Games" publication</ExtLink>).
    A lot of other games were based on "Hamurabi".
    One such game is <ExtLink href="https://www.mobygames.com/game/kingdom">"Kingdom"</ExtLink> from 1972
    for <ExtLink href="https://en.wikipedia.org/wiki/Altair_8800">Altair 8800</ExtLink> and other systems.
    Then, the ZX Spectrum port of "Kingdom"
    <ExtLink href="https://zxpress.ru/book_articles.php?id=1185">has appeared in the book "Как написать игру для ZX Spectrum"</ExtLink>
    (eng: "How to write a game for ZX Spectrum") in the year of 1994.
</p>
<p>
    And here comes my part.
    The listing of that ZX Spectrum "Kingdom" port was used by me as a base for developing
    my own extended version called "Kingdom 2", also for ZX Spectrum.
    This version ended up almost 10 times bigger than the original.
    I added a lot of new stuff: ships, science and even a storyline.
    Though, I'm not sure if that "Kingdom 2" is preserved somewhere.
    Anyway, when I got my first PC, I decided to port "Kingdom 2" to Windows
    because it was my biggest project on ZX Spectrum and I did't want it to vanish.
    And the new Windows version had been called "Kingdom 3",
    i.e. this page is about that very game.
</p>
<p>
    "Kingdom 3" with its source code was released to the public,
    and in 2011 it was
    <ExtLink href="http://instead-games.ru/game.php?ID=69">ported to INSTEAD game engine</ExtLink>
    (not by me) and called "Королевство Зерна" (eng: "Kingdom of Grain").
    Later, INSTEAD was ported to Android.
</p>
<p>
    So, that's how one little game made its way through the history
    starting from mainframes and surviving for more than 50 years
    ended up on modern smartphones.
    That's even more impressive that a history of Tetris!
</p>
<p>
    The abovementioned "Kingdom of Grain" is almost identical to my "Kingdom 3" in terms of gameplay
    but additionally has an English translation and some graphics.
    So, you can
    <ExtLink href="http://instead-games.ru/instead-em/?/games/instead-kingdom_of_grain-0.9.3.zip">play it online</ExtLink>
    in INSTEAD emulator and get almost the same experience as playing the "Kingdom 3".
</p>
<p>
    <strong>WARNING:</strong>
</p>
<ul>
    <li>Kingdom 3 is entirely in Russian.</li>
    <li>Windows Vista and newer versions ARE NOT supported!</li>
</ul>
<p>
    <ExtLink href="https://mega.nz/#!dc8V1SZL!VDT9HY9Se9KfmaoFkM1mbSS0FFLASzHa1CbEgK2YY7c">
        Download the binary and the source code.
    </ExtLink>
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'trade',
    label: 'Trade screen'
}, {
    name: 'war',
    label: 'War preparations'
}, {
    name: 'stats',
    label: 'Statistics window'
}]
</script>
