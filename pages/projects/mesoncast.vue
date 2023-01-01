<template>
<Project
    homepage="https://sourceforge.net/projects/mesoncast/"
    :screenshots="screenshots"
>
<p>
    MesonCast is an Internet radio server that allows you to broadcast the music
    from your computer or remote servers across LAN in MP3 format.
    Server can load music from playlists and/or directories, encode it to MP3 on fly
    and broadcast it to connected clients.
    MesonCast understands a lot of lossy/lossless/tracker formats and CUE sheets.
</p>
<p>
    Main feature of MesonCast is its web GUI, that allows you to control stations,
    browse station playlists and switch tracks in real time.
    Also, you can retransmit other Internet radio stations across your LAN
    and switch between those stations dynamically via web GUI.
</p>
<p>
    Windows, OSX and Linux platforms are supported.
</p>
<p>
    IMPORTANT: MesonCast is quite a simple server.
    There are a lot of restrictions:
</p>
<ul>
    <li>It does not have a lot of configuration options.</li>
    <li>It can only broadcast in MP3.</li>
    <li>There's no guarantee that the server would not crash unexpectedly.</li>
    <li>You can run many stations at a time, but there's no easy way to broadcast the same stream in different bitrates.</li>
    <li>MesonCast streaming protocol is not fully compatible with ShoutCast.</li>
</ul>
<p>
    So, if you need a real Internet radio server,
    please use the original Icecast or Shoutcast servers instead.
    I even encourage you to try them out first!
</p>
<p>
    To read the application manual, click the tray context menu and choose Help > Manual.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'main',
    label: 'Web GUI: Home'
}, {
    name: 'list',
    label: 'Web GUI: Playlist'
}, {
    name: 'file',
    label: 'Web GUI: File operations'
}]
</script>
