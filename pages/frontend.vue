<template>
  <section>
    <section id="intro">
      <v-row justify="center">
        <h1>Front end development</h1>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <p>
            This mouse is passionate about Front-end development and User
            Experience in particular. I mean, why do we build applications? To
            be useful to someone (the user), right? 😉
          </p>
          <p>
            It has long been my dream to create cool and amazing applications.
            I've wanted to become a Front-end developer for a long time, however
            it has been a rocky road for me to become a Front-end developer. I
            did not study Computer Science and I didn't have any professional
            development experience after leaving university. If you want to
            become a Front-end developer yourself, you could look at the
            activities I did to become a Front-end developer.
          </p>
        </v-col>
      </v-row>
    </section>
    <section id="tips">
      <v-row>
        <v-card class="mx-auto mb-4" tile>
          <v-toolbar color="pink lighten-1" dark>
            <v-toolbar-title
              >Tips in becoming a Front-end developer</v-toolbar-title
            >
          </v-toolbar>
          <v-list :disabled="true" :flat="true">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-row>
    </section>
    <section id="meetups">
      <v-row justify="center"><h2>Meetups</h2></v-row>
      <v-row justify="center">
        <v-col cols="8">
          <p>
            When you don't know where to start it is great to meet other people
            who are already a front-end developer. Find a meetup nearby your
            place (for example
            <a href="https://www.meetup.com/">meetup.com</a>). It is nice when
            people can explain you things face to face and look at your computer
            when you are stuck. Having other people around you who are also
            learning to program can also be motivating. If that is not possible
            you can try to look for online communities. The best place to learn
            is from someone who is already in the field. And maybe they will let
            you know when there is a junior developer spot available at their
            company :)
          </p>
        </v-col>
      </v-row>
    </section>
    <section id="courses">
      <v-row justify="center"><h2>Online courses</h2></v-row>
      <v-row justify="center">
        <v-col cols="8">
          <p>
            As a Front end developer, the 3 primary technologies/pillars you
            need to know are:
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <ol>
          <li class="font-weight-bold">HTML</li>
          <li class="font-weight-bold">CSS</li>
          <li class="font-weight-bold">Javascript</li>
        </ol>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <p>
            All the frameworks and libraries are secondary. It is recommended to
            first focus on these three technologies before looking into anything
            else. Once you mastered HTML, CSS and JavaScript, you can understand
            frameworks better. <br />
            I followed online courses on Web development on Udemy and
            Frontendmasters. Frontend masters offers good courses to get
            started. The subscription is a bit expensive and you can only view
            the videos while you are still subscribed. The courses I bought on
            Udemy (often just for €12,- instead of the original price) are
            JavaScript fundamentals, and courses on frameworks (Angular, VueJS,
            React, Svelte) so I can review them anytime in the future without
            paying money again. Also, the courses I bought from Maximilian
            Schwarzmüller will be updated regularly for free once you bought it.
            Don't forget Youtube, there are also a lot of web developers who
            post videos with good lessons on web development. A lot of talks
            given at web development conferences are filmed and posted nowadays
            on Youtube. Yay for knowledge sharing!
          </p>
        </v-col>
      </v-row>
      <v-row>
        <v-card class="mx-auto mb-4" tile>
          <v-toolbar color="red lighten-1" dark>
            <v-toolbar-title
              >Courses I recommend on FrontendMasters</v-toolbar-title
            >
          </v-toolbar>
          <v-list :disabled="true" :flat="true">
            <v-list-item v-for="(course, i) in courses" :key="i">
              <v-list-item-content>
                <v-list-item-title>{{ course.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card></v-row
      >
      <v-row>
        <v-card class="mx-auto mt-8 mb-4" tile>
          <v-toolbar color="light-green lighten-1" dark>
            <v-toolbar-title
              >Conference talks you can watch on Youtube</v-toolbar-title
            >
          </v-toolbar>
          <v-list :flat="true">
            <v-list-item v-for="(conference, i) in conferences" :key="i">
              <v-list-item-content>
                <v-list-item-title
                  ><a :href="conference.link">{{
                    conference.title
                  }}</a></v-list-item-title
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card></v-row
      >
    </section>
    <section id="platforms">
      <v-row justify="center"
        ><h2>Practice on online programming platforms</h2></v-row
      >
      <v-row justify="center">
        <v-col cols="8">
          <p>
            When you are just starting out,
            <a href="https://www.codecademy.com/">CodeCademy</a> and
            <a href="https://www.freecodecamp.org/">FreeCodeCamp</a>
            can help you with guided tracks. If you want to dive further into
            specific JavaScript topics, you can go to
            <a href="https://nodeschool.io/">Nodeschool.io</a>, where they
            provide you with specific courses.
            <a href="https://www.codewars.com/">Codewars</a> is a fun and a bit
            of competitive way to practice your JavaScript and TypeScript
            skills. It is not specifically meant for learning on web
            development.
          </p>
        </v-col>
      </v-row>
    </section>
    <section id="projects">
      <v-row justify="center"><h2>Build your own projects</h2></v-row>
      <v-row justify="center">
        <v-col cols="8">
          <p>
            Or you could try to contribute to open source projects! It can be a
            bit intimidating though and not all contributions are received well
            at big projects so I would recommend building your own project
            first. Sign up on <a href="https://github.com/">Github</a> (Git
            knowledge is required),
            <a href="https://jsfiddle.net/">JSFiddle</a>, or
            <a href="https://codepen.io/">CodePen</a> and start your own
            portfolio. You will learn the most on programming by looking up
            technologies when you actually need them to build (parts of) an
            application. The websites which contain a lot of information on web
            development are:
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <ul>
          <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web">MDN</a>
          </li>
          <li><a href="https://css-tricks.com/">Css-tricks</a></li>
          <li><a href="https://www.w3schools.com/">W3 Schools</a></li>
          <li>
            <a href="https://stackoverflow.com/"
              >Stack overflow (when you have a specific problem)</a
            >
          </li>
        </ul>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <p>
            The Mozilla Developer Network contains a full documentation on web
            development. Whenever I have to look up things such as methods in
            JavaScript, attributes on HTML elements or CSS shorthand properties,
            I go to MDN.
          </p>
        </v-col>
      </v-row>
    </section>
    <section id="newsletters">
      <v-row justify="center"><h2>Subscribe to digital newsletters</h2></v-row>
      <v-row justify="center">
        <v-col cols="8">
          <p>
            To keep up to date with the latest innovations and updates in the
            world of Front end I would recommend subscribing to the following
            newsletters:
          </p>
        </v-col>
      </v-row>
      <v-row justify="center">
        <ul>
          <li><a href="https://javascriptweekly.com/">Javascript Weekly</a></li>
          <li><a href="https://frontendfoc.us/">Frontend focus</a></li>
        </ul>
      </v-row>
    </section>
    <section id="twitter">
      <v-row justify="center"
        ><h2>Follow web development news on Twitter</h2></v-row
      >
      <v-row justify="center">
        <v-col cols="8">
          <p>
            Maybe a bit of overkill if you are already subscribed to
            newsletters. I follow all the frameworks I use on Twitter for
            announcements, all the conferences I went to, and JavaScript gurus
            like Kyle Simpson (You Don't Know JavaScript). There is also a
            JavaScript Daily, but you can get overwhelmed by all the innovations
            in Web Development land so following everything on Social Media
            should not be your main priority 😉
          </p>
        </v-col>
      </v-row>
    </section>
    <section id="feedback">
      <v-row justify="center">
        <v-col cols="8">
          <p>
            If you have any questions, feedback or additions you can let me know
            on
            <a href="https://twitter.com/ansdenijs">Twitter</a>
          </p>
        </v-col>
      </v-row>
    </section>
  </section>
</template>

<script>
export default {
  name: 'Frontend',
  data: function() {
    return {
      items: [
        { title: 'Go to developer meetups' },
        { title: 'Follow (online) courses on web development' },
        { title: 'Practice on online programming platforms' },
        { title: 'Start building your own projects' },
        { title: 'Subscribe to newsletters' },
        { title: 'Follow Frontend news on Twitter' }
      ],
      courses: [
        { title: 'Getting started with JavaScript' },
        { title: 'Deep JavaScript Foundations' },
        { title: 'Four Semesters of Computer Science in 5 Hours' }
      ],
      conferences: [
        {
          title: 'JS Nation',
          link: 'https://www.youtube.com/channel/UCQM428Hwrvxla8DCgjGONSQ'
        },
        {
          title: 'View Source',
          link:
            'https://www.youtube.com/watch?v=5qgUC_z8syw&list=PLo3w8EB99pqLQj3cOk2UCjA8szdseqs7b'
        },
        {
          title: 'JSConf',
          link: 'https://www.youtube.com/user/jsconfeu'
        },
        {
          title: 'Frontend Love',
          link: 'https://www.youtube.com/channel/UC1nBp6ouBB1o5P8YvPznPOw'
        },
        {
          title: 'Google I/O',
          link:
            'https://www.youtube.com/watch?v=rUUazNIZW7I&list=PLNYkxOF6rcIATmAmz7HcCzongGvQEtx8i'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
