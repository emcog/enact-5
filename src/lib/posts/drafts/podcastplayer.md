---
title: "Custom podcast player"
date: "2021-10-26"
updated: "2021-11-01"
categories:
- "digital"
- "development"
- "social mindfulness"
coverImage: "/media/meditation-player-cover.png"
coverWidth: 16
coverHeight: 9
excerpt: A podcast player and rss feed built in Svelte  
---
<script>
    import PicsForMd from "../../components/PicsForMd.svelte"
</script>

Situation
I was working with small organisations, Mindfulness Connected, to help their digital strategy and implementation. 
In the past they had explored native apps but these were costly to maintain, relied on their user's installing (and overcoming
any security related hurdles) and provide the best platform form for prolonged concentration.  

Task

Reviewing the strategy with the team we decided to move away from a custom app and its overheads. Instead focusing
on print and using 

Action
Result
This custom podcast player automatically generates an rss file which is valid for Apple Podcasts. 
It is built using Svelte and SvelteKit. The content is hosted on AWS S3 and distributed on their 
CDN cloudfront and the interface hosted on Netlify. Unless your audience is huge it is basically free to run.

The design is heavily inspired on the apple podcast desktop app. I didn't have tons of time and 
for this project wanted to foucs my efforts on a) getting it out and b) development

The "heart" of the of the app is built around a JSON file which follow Apples podcasting rules. 
It's currently hard coded but I may use this to design a nice form and hook it up to a server. 
With the current translations in process, the form could eventually have 7 users. 
Alternatively I might refactor it to use dynamic routing with markdown files, like this site.

Of course all of this takes time and I'm currently busy with other projects. What ever further 
developments happen the main point was to generate a tidy rss feed to reduce the risk of 
messing up the mark-up, produce a professional looking platform that partner websites could link to,
and, provide the basic architecture for an organisation that is set to grow internationally.
 

<PicsForMd caption={"Screenshots"} images={[
{ name: "meditation-player-desktop-half.png", alt:"desktop" },
{ name: "meditation-player-mobile-half.png", alt: "mobile"},
]}/>


<PicsForMd caption={"Screenshots"} images={[
{ name: "meditation-player-desktop-half.png", alt: "imagine"}
]}/>

<PicsForMd caption={"Screenshots"} images={[
{ name: "meditation-player-mobile-half.png", alt:"imagine" }
]}/>
