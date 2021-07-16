<template>
  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Osnabrucker_Rad" viewBox="-204 -204 408 408" width="408" height="408">
  <desc id="de">Osnabrücker Rad</desc>
    <path id="felly" fill="white" d="M 6,37 C 6,56 9,75 23,94 C 11,106 13,135 13,156 L -12,156 C -12,135 -11,106 -23,94 C -9,75 -6,56 -6,37 L 6,37 z"/>
    <use xlink:href="#felly" transform="rotate(60)"/>
    <use xlink:href="#felly" transform="rotate(120)"/>
    <use xlink:href="#felly" transform="rotate(180)"/>
    <use xlink:href="#felly" transform="rotate(240)"/>
    <use xlink:href="#felly" transform="rotate(300)"/>
    <g style="stroke:white; fill:none;">
      <circle stroke-width="12" r="195"/>
      <circle stroke-width="12" r="176"/>
      <circle stroke-width="11" r="157"/>
      <circle stroke-width="11" r="37"/>
      <circle stroke-width="11" r="18"/>
    </g>
  </svg>
</template>

<script>
export default {
  name:'OsRad'
}
</script>
