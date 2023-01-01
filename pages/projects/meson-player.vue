<template>
<Project
    homepage="https://mesonplayer.alkatrazstudio.net"
    :screenshots="screenshots"
>
<p>
    Meson Player is a music player with almost no GUI (except tooltips and tray context menu).
    It's perfect when you don't need any fancy flashy GUI to control a playback
    yet you need a tray icon and popup messages
    (though you can disable them as well).
    The player runs in the background and gets out of your way as much as possible.
    Switching tracks, volume control, loading and saving playlists -
    all is performed by using hotkeys that are available globally across the system.
    Therefore, you can control the player while working in any application.
    For example, there is no need to switch tasks just to jump to a next track.
</p>
<p>
    Meson Player is the successor of
    <NuxtLink to="/projects/stealth-player">Stealth Player</NuxtLink>.
</p>
<p>
    Technical features:
</p>
<ul>
    <li>
        Meson Player is controlled mostly by NumPad or multimedia keys,
        but it also has a tray context menu with additional commands.
    </li>
    <li>
        Most popular lossy and lossless stream formats are supported (MP3, OGG, FLAC, ...).
        Also there's a support for some less known stream and module formats (MOD, AY, SID, ...).
        For a full list of suported formats/extensions see the application manual
        (open the tray context menu and choose Help > Manual, then in the manual go to "Description").
        More formats can be added via
        <ExtLink href="http://www.un4seen.com/bass.html#addons">BASS audio library add-ons</ExtLink>.
    </li>
    <li>Can save/load playlists in various formats: M3U, PLS, XSPF, ...</li>
    <li>CUE sheets support.</li>
    <li>Internet radio playback, remote playlists support.</li>
    <li>Can control a system sound volume level.</li>
    <li>
        Can open whole directories from a playlist,
        so you can write just a folder path in your playlist,
        and Meson Player will automatically load all files in that directory.
    </li>
    <li>Can control a system sound volume level.</li>
    <li>A big variety of options allowing to change the app's behavior and appearance.</li>
    <li>Last.FM scrobbling.</li>
</ul>
<p>
    The list of supported platforms:
</p>
<ul>
    <li>MS Windows 10 x86_64</li>
    <li>Linux x86_64</li>
    <li>OSX x86_64</li>
</ul>
<p>
    <strong>NOTE:</strong> Windows versions older than Windows 10 and 32-bit OS are not supported!
</p>
<p>
    The main idea for creating this player is based on an assumption that most of the features
    included in modern audio players usually almost never used.
    Indeed, when you already started your music and, say, adjusted a volume,
    you don't need a music player interface anymore, right?
    With that in mind, Meson Player follows its own dzen and includes only features
    that are absolutely needed to listen to the music (well, maybe some more).
    Just start the music and relax!
</p>
<p>
    To read the application manual open the tray context menu and choose Help > Manual.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'win',
    label: 'Meson Player in Windows 10'
}, {
    name: 'osx',
    label: 'Meson Player in OSX'
}, {
    name: 'linux',
    label: 'Meson Player in Kubuntu'
}]
</script>
