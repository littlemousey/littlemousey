<template>
  <div class="schiermonnikoog-page">
    <trip-header
      img-url="https://i.postimg.cc/13JBXgwP/DSC05152.jpg"
      title="Schiermonnikoog"
      text="This peaceful island is a paradise for hikers and bikers to enjoy nature. It
          has long stretching beaches (18 kilometers long) but also offers small
          lakes and woods. There are no cars allowed on the island. You can take
          a ferry to Schiermonnikoog from Lauwersoog in the Friesland province."
    ></trip-header>
    <trip-highlight
      image-url="https://i.postimg.cc/D0L5wBdY/DSC05097.jpg"
      text="The ferry to the island. It takes about 45 minutes. You can buy
          tickets online. It would be wise to check the timetable departure
          times."
      :image-left="true"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/TYjC8NPK/DSC05121.jpg"
      text="There are many companies for renting bikes to get around the island
          quickly."
      :image-left="false"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/LsQxCq8v/IMAG3564.jpg"
      text="The town center contains one supermarket and one bakery, but also
          offers a few shops and there is plenty of choice for restaurants."
      :image-left="true"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/mDGF02bn/IMAG3614.jpg"
      text="One well-known hotel and restaurant is called 'Hotel Van Der Werff'."
      :image-left="true"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/qq4yCBSK/IMAG3538.jpg"
      text="I can definitely recommend the 'Eilander appeltaart' (Island apple
          pie) at restaurant Ambrosijn 😉🍰"
      :image-left="true"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/zBL09JLN/IMAG3562.jpg"
      :image-left="false"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/bwGFm39G/DSC05112.jpg"
      :image-left="true"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/zB90N9Wg/DSC05165.jpg"
      :image-left="false"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/SKH4Zn94/IMAG3526.jpg"
      text="You can clearly see that the villagers have a connection to the sea"
      :image-left="true"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/43y59JQc/IMAG3572.jpg"
      text="The islanders have their own traditions.
      Around Pentecost they 'steal' a cock and lock it up for 3 days in a box on top of a flagpole provided with food and water.
      After 3 days, the cock is released and given back to the owner. This ritual is called 'Kallemooi'"
      :image-left="false"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/zGJpqwL0/IMAG3570.jpg"
      text="The island famous monk, Martin van Waning. He was a sculptor and
          artist."
      :image-left="true"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/zvbdXkXb/DSC05179.jpg"
      text="The beaches are very wide and you might be able to spot seals. Be
          cautious, you are not allowed to touch or come near young seals."
      :image-left="false"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/tTVNB2fC/IMAG3583.jpg"
      text="Visit the Wassermann bunker, a bunker built by the German during the Second World War"
      :image-left="true"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/wjHSFSjw/DSC05134.jpg"
      text="Don't forget to see the lighthouse up close even though you can still see it from the other side of the island"
      :image-left="false"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/3rvt1x5C/DSC05123.jpg"
      text="And of course you have to visit the Northern tower, which does not function as lighthouse anymore"
      :image-left="false"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/9QzsvWCQ/IMAG3578.jpg"
      text="Whale jaws are displayed in memory to whaling after the Second World War"
      :image-left="true"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/c4GXbGdq/DSC05183.jpg"
      text="You can cycle to the Kobbeduinen landmark, where you can walk in the national park."
      :image-left="false"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/13JBXgwP/DSC05152.jpg"
      text="Because the island is a breeding ground for birds, you can do bird
          spotting from a wooden hut at the west lake to not disturb the birds."
      :image-left="true"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/tJKB1VYr/IMG-20190609-143901.jpg"
      text="Overall, I would suggest renting a bike or enjoy a hike around Schiermonnikoog. The island has a lovely village and offers a wide area of nature to explore."
      :image-left="false"
    ></trip-highlight>
    <trip-highlight
      image-url="https://i.postimg.cc/5trm5ZsR/IMG-20190609-111650.jpg"
      :image-left="true"
    ></trip-highlight>
    <trip-achievements :achievements="activities"></trip-achievements>
    <v-layout row wrap align-start justify-center>
      <v-flex xs6 my-5>
        <div class="text-xs-center">
          <span class="grey--text">Period of visit: June 2019</span>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import TripHeader from '@/components/travelJournal/TripHeader'
import TripHighlight from '@/components/travelJournal/TripHighlight'
import TripAchievements from '@/components/travelJournal/TripAchievements'
export default {
  name: 'Schiermonnikoog',
  components: { TripHeader, TripHighlight, TripAchievements },
  data() {
    return {
      activities: [
        {
          achieved: true,
          title: 'Visit lighthouse'
        },
        {
          achieved: true,
          title: 'Eat Eilander apple pie'
        },
        {
          achieved: true,
          title: 'Cycle to beacon of Kobbeduinen (sand dune)'
        },
        {
          achieved: true,
          title: 'Visit beach pavilion De Marlijn'
        }
      ]
    }
  }
}
</script>
