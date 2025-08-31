<template>
<Project
    homepage="https://github.com/alkatrazstudio/konik"
    :screenshots="screenshots"
>
<p>
    Konik is a music player with almost no GUI (except for tooltips and a tray context menu).
    The player runs in the background and gets out of your way as much as possible.
    Switching tracks and volume control is performed by using hotkeys
    that are available globally across the system.
    Therefore, you can control the player while working in any application.
    For example, there is no need to switch tasks just to jump to a next track.
</p>
<p>
    Konik is a heavily toned down version of
    <NuxtLink to="/projects/meson-player">Meson Player</NuxtLink>.
    It has almost all the main features,
    but lacks a lot of advanced functionality and settings.
</p>
<p>
    Technical details:
</p>
<ul>
    <li>Mostly controlled by NumPad</li>
    <li>Supported formats: FLAC, OGG, MP3</li>
    <li>CUE sheets support (for FLAC only)</li>
    <li>Gapless playback</li>
    <li>ListenBrainz/Last.fm scrobbling (with offline support)</li>
    <li>Can control the system sound volume level</li>
    <li>Can be controlled via MPRIS</li>
    <li>Can show the current file in the file manager</li>
</ul>
<p>
    The main idea of this player is based on an assumption that most of the features
    included in modern desktop audio players are usually almost never used.
    When you already started your music and adjusted the volume,
    you don't need the music player interface anymore, right?
    With that in mind, Konik follows its own dzen and only includes the features
    that are absolutely needed to listen to the music.
</p>
<p>
    Here's a history of this application.
    In 200X I created some silly music player called ZafigAMP, which was a parody of
    <ExtLink href="https://en.wikipedia.org/wiki/Winamp">Winamp</ExtLink>.
    It had a full-blown GUI,
    but it also had a special mode that unloaded all the GUI when the program is minimized to the tray.
    It was called "Stealth Mode".
    Later, in 2007 this mode was converted into a separate program called
    <NuxtLink href="/projects/stealth-player">Stealth Player</NuxtLink>.
    It was written in <ExtLink href="https://en.wikipedia.org/wiki/Delphi_(software)">Delphi</ExtLink>
    and, therefore, had only Windows support.
    So, when I was transitioning to Linux, Delphi became a no-go for the future development,
    and I started to develop using <ExtLink href="https://en.wikipedia.org/wiki/Qt_(software)">Qt</ExtLink>.
    In 2012, <NuxtLink href="/projects/meson-player">Meson Player</NuxtLink> was created.
    It was one of my most complex projects, which had a lot of functionality and settings.
    However, as time went on, it turned out it was too complex.
    The initial "micro-player" started to suffer from feature creep.
    The maintenace burden was too high,
    I didn't want to use C++ anymore,
    the Qt library was becoming increasingly hostile to developers,
    a proprietary library was used for audio output...
    So I decided to nuke it all and start from scratch.
    Thus, in 2022, Konik was born, written in
    <ExtLink href="https://en.wikipedia.org/wiki/Rust_(programming_language)">Rust</ExtLink>.
    Thanks to all the third-party libraries, I made a fully-working version within only 5 months.
    The scope of the application was greatly reduced
    and now only the features that I really need myself are supported.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'popup',
    label: 'Popup'
}, {
    name: 'menu',
    label: 'Menu'
}]
</script>
