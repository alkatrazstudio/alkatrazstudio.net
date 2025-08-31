<template>
<Project
    homepage="https://github.com/alkatrazstudio/albunaut"
    :screenshots="screenshots"
>
<p>
    The main purpose of Albunaut is to track new albums from the artists you're listening to,
    using the data from your ListenBrainz account.
</p>
<p>
    The main incentive for this project was to replace the online service
    <ExtLink href="https://muspy.com/">muspy</ExtLink> I was using at the time.
    With ListenBrainz data, Albunaut can provide much more automation,
    e.g. show you only the albums you haven't listened to,
    automatically show albums from the new artists in your library
    without needing to manually add those artists,
    filter out unneeded album types (e.g. Compilations or Remixes).
</p>
<p>
    Albunaut connects to your ListenBrainz account, downloads your listens,
    downloads all the relevant data (albums, artists, etc),
    and then provides you with various statistics.
    You can filter and sort this data in various ways,
    e.g. show your recently listened artists.
    The screenshot below features the filter that shows you
    the newest albums that you haven't listened to from your cherry-picked list of artists.
</p>
<p>
    Albunaut does not update anything automatically and does not use any notifications.
    You need to manually sync your data from ListenBrainz and analyze the results.
</p>
<p>
    Initially, the project had a working name HeranMynd, but then AI convinced me to go with Albunaut.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'main',
    label: 'Main screen'
}]
</script>
