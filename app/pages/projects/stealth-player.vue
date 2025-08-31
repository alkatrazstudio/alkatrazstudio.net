<template>
<Project
    homepage="https://sourceforge.net/projects/stealthplayer/"
    :screenshots="screenshots"
>
<p>
    <strong>ATTENTION:</strong>
    this project had been superseded by
    <NuxtLink to="/projects/meson-player">Meson Player</NuxtLink>!
</p>
<p>
    Stealth Player is a music player with almost no GUI (except tooltips and tray context menu).
    It comes in handy when you don't need any fancy flashy GUI to control a playback.
    The player runs in the background and gets out of your way as much as possible.
    You control the player using only your keyboard.
    Switching tracks, volume control, loading and saving playlists -
    everything is performed via hotkeys that are available globally across the system.
    Therefore, you can control the player while working in any application.
    For example, there is no need to switch tasks just to jump to a next track.
</p>
<p>
    Supported sound formats: MO3, IT, XM, S3M, MTM, MOD, UMX, MP3, MP2, MP1, OGG, WAV<br>
    Supported playlist formats: LST, M3U, M3U8
</p>
<p>
    Also, the player can open whole directories from a playlist,
    so you can write just a folder path in your playlist,
    and Stealth Player will automatically load all files in that directory.
</p>
<p>
    The player can open Internet radio streams,
    but not remote playlists containing those streams,
    i. e. you need a direct link to a stream, not a playlist.
</p>
<p>
    Stealth Player will work on Windows XP or later.
    But all features (i. e. balloon tooltips or support for dynamic change of the output device)
    become available only on Windows 7.
    I can only hope, that MS will not break anything
    and Stealth Player will run smoothly on later versions of Windows as well.
</p>
<p>
    The main idea for creating this player is based on an assumption that most of features
    included in modern audio players usually almost never used.
    Indeed, when you already started your music and, say, adjusted a volume,
    then you don't need your music player's interface anymore, right?
    With that in mind, Stealth Player follows its own dzen and includes only features
    that are absolutely needed to listen to the music.
    For example, it doesn't even have the ability to fast forward/rewind a track or pause it.
    Because, why the hell do you need these features anyway?
    Just start the music and relax!
</p>
<p>
    The application was created first as a module to another music player with GUI
    and served as a lightweight version of that player.
    But the GUI part was later dropped, and Stealth Player became an independent application.
</p>
<p>
    Read the README file inside the archive for a quick start guide!
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'normal',
    label: 'Normal mode: no GUI'
}, {
    name: 'balloon',
    label: 'Balloon tooltips'
}, {
    name: 'radio',
    label: 'Playing Internet radio'
}]
</script>
