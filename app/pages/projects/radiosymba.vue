<template>
<Project
    homepage="https://sourceforge.net/projects/radiosymba/"
    :screenshots="screenshots"
>
<p>
    RadioSymba is an Internet radio player and recorder
    for Nokia Symbian smartphones with Touch UI.
    It is written using Qt framework.
    It has a built-in catalog containing over 3000 radio stations sorted by genres and styles.
</p>
<p>
    Although, design might look spartan, this player has a set of unique features
    that were never seen in any other mobile Internet radio players at the time:
</p>
<ul>
    <li>record an audio to a file</li>
    <li>automatically start/stop recording when a specific stream title is found</li>
    <li>pause a playback</li>
    <li>fast switching between favorite stations</li>
</ul>
<p>
    Also RadioSymba has an equalizer and a lot of options
    to customize the program for your needs.
    What else?
    RadioSymba can log titles of streams it plays,
    so you can track what you're listening to.
</p>
<p>
    The bad thing is that only MP3 streams are supported.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'main',
    label: 'Main window'
}, {
    name: 'options',
    label: 'Options'
}, {
    name: 'stations',
    label: 'Stations list'
}]
</script>
