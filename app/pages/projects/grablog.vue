<template>
<Project
    homepage="https://github.com/alkatrazstudio/grablog"
    :screenshots="screenshots"
>
<p>
    GrabLog shows what packages can be updated and then shows changelogs for each package.
</p>
<p>
    Package managers don't require changelogs to be a part of the metadata.
    Because of that, developers must seek these changelogs manually.
    It is very tedious: open the package manager's website, search for the package,
    find its repository, search for any changelog files, go to releases section to see a changelog.
</p>
<p>
    GrabLog automates everything and gets you the package changelog in one click.
</p>
<p>
    Note: this tool is only for fetching changelogs and displaying the latest version of a package.
    It does not update any packages by itself and does not modify any files in your project.
</p>
</Project>
</template>

<script setup lang="ts">
const screenshots: Screenshot[] = [{
    name: 'main',
    label: 'Main screen'
}]
</script>
