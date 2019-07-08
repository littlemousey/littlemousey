const header = {
  title: 'Paris',
  image: 'https://i.postimg.cc/g0NtMK7B/IMAG2980.jpg',
  text:
    'Lovely city to stay for the weekend. Enjoy a walk through the city or take a subway for your convenience. It is possible to rent bikes too. Paris is the most famous for its musea, architecture and churches. A few of the many famous landmarks in Paris include the Eiffel tower, Sacré-Cœur, and the Arc de Triomphe'
}

const highlights = [
  {
    image: 'https://i.postimg.cc/DyZd2T80/IMAG2913.jpg',
    imageDescription: 'Gare du Nord',
    text:
      'We arrived at the big station Gare du Nord by train (Thalys) where international trains arrive. Mostly offers book reading shops, coffee shops, and small international fast food chains for the travellers. Outside of the station a lot of restaurants are situated across the street.',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/1zf3tvDp/IMAG3125.jpg',
    imageDescription: 'Gare du Nord international trains',
    text: '',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/4yTfWZq5/IMAG3127.jpg',
    imageDescription: 'Gare du Nord trains',
    text: '',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/QdMzh7cT/DSC04895.jpg',
    imageDescription: "Gare de l'est",
    text:
      'This station is nearby Gare du Nord (10 minutes walk). It has quite a few (international) shops inside and is a subway station as well',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/BZc7FpgF/DSC04896.jpg',
    imageDescription: "Gare de l'est on the inside",
    text: "Gare du l'est station on the inside",
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/yxXGYXfF/IMAG2932.jpg',
    imageDescription: 'Subway',
    text:
      'The subway is very convenient for long distances, for example the Eiffel tower to the Sacré-Cœur could take an hour to walk. If you are going to make use of the subway very often during your trip, you could consider a metro pass instead of buying a new ticket each trip.',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/6qwHS49T/IMAG2945.jpg',
    imageDescription: 'Eiffel tower',
    text:
      "One of Paris's landmarks is the Eiffel tower. You can go there by subway, at the 'Champ de Mars / Tour Eiffel' stop. It is situated in a park where you can walk around freely. You need to wait in line and pay to climb up the tower.",
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/L5qKpWPW/IMAG2956.jpg',
    imageDescription: 'Eiffel tower',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/QxhPYwtS/DSC04907.jpg',
    imageDescription: 'Seine river',
    text:
      'Next to the Eiffel tower is the Seine river where you can find a lot of beautiful bridges',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/pdwcf14f/IMAG2960.jpg',
    imageDescription: 'Arc de Triomphe',
    text:
      'Arc de Triomphe is one of the most famous monuments in Paris. It was built in the 1800s and honours the victories during the French Revolutionary and Napoleonic Wars. You have to buy a ticket to go upstairs. It has a beautiful view of the city but it can be quite a climb to the top by stairs. You can go by elevator, but only if you have medical conditions or belong to the elderly',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/fLY2BfQ6/DSC04915.jpg',
    imageDescription: 'View from Arc de Triomphe',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/nhwPzL1w/DSC04909.jpg',
    imageDescription: 'Arc de Triomphe underneath',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/g0NtMK7B/IMAG2980.jpg',
    imageDescription: 'View from Arc de Triomphe',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/YqRP5RL7/DSC04942.jpg',
    imageDescription: 'Remembrance unknown soldier',
    text:
      'Underneath the Arc de Triomphe lies the tomb of the Unknown Soldier from World War I. On the 18th of May a ceremony is held to honour the unknown fallen soldiers',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/R0kdpbRd/DSC04965.jpg',
    imageDescription: 'Louvre',
    text:
      'Famous for the Louvre pyramids and as former royal palace. It is a huge museum with Egyptian Antiquities and paintings. The Louvre is also home of the Mona Lisa. You can easily spend a whole day in the Louvre if you want to',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/mg68Cr10/DSC04963.jpg',
    imageDescription: 'Louvre palace',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/YCSdvF06/DSC04958.jpg',
    imageDescription: 'Louvre palace statue',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/L8WRZyKj/IMAG3040.jpg',
    imageDescription: 'Inside Louvre',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/dtqqMkjZ/IMAG3042.jpg',
    imageDescription: 'Inside Louvre',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/jS2t5p9s/DSC05018.jpg',
    imageDescription: 'Mona Lisa',
    text: 'The Mona Lisa is in reality pretty small',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/xjG0FyMS/DSC05006.jpg',
    imageDescription: 'The Winged Victory of Samothrace',
    text: 'The Winged Victory of Samothrace',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/bJ1T7HVh/DSC04960.jpg',
    imageDescription: 'Gate Tuileries Garden',
    text:
      'Gate in front of the Tuileries Garden. The garden lies next to the Louvre',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/zBKJNTQK/DSC04980.jpg',
    imageDescription: 'Tuileries Garden',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/MGhWg99z/DSC04970.jpg',
    imageDescription: 'Streets of Paris',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/rySn3c7r/IMAG2996.jpg',
    imageDescription: 'Disney store',
    text:
      "Paris is also a great city for shopping. If you won't be able to visit Disneyland Paris, you can still visit the Disney stores in Paris",
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/cLvGZQgC/IMAG3082.jpg',
    imageDescription: 'Galeries Lafayette',
    text: 'Galeries Lafayette has expensive international shops of brands',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/D0cnJnnz/DSC05062.jpg',
    imageDescription: 'Galeries Lafayette',
    text: 'Galeries Lafayette has a beautiful ceiling',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/J7QLQ7Cr/DSC05078.jpg',
    imageDescription: 'Sacré-Cœur',
    text: 'Last, but not least. The Sacré-Cœur',
    imageLeft: true
  },
  {
    title: 'Food'
  },
  {
    image: 'https://i.postimg.cc/zXxdtf4X/IMG-5400.jpg',
    imageDescription: 'Parisan crêpe',
    text:
      "Don't forget to eat a Parisan crêpe, croissants, French cheese, French macarons, and a pain au chocolat 😉",
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/xTnxShSF/IMAG2990.jpg',
    imageDescription: 'French bread',
    imageLeft: false
  },
  {
    image: 'https://i.postimg.cc/KYkQNyn4/IMAG2985.jpg',
    imageDescription: 'French cheese',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/RVdPCdSC/IMAG2987.jpg',
    imageDescription: 'Escargots',
    text: 'Escargots, French delicacy consisting of cooked edible land snails',
    imageLeft: true
  },
  {
    image: 'https://i.postimg.cc/7Zj8Lf0V/IMAG3133.jpg',
    imageDescription: 'French macarons',
    text: 'Macarons can be great as a souvenir',
    imageLeft: true
  }
]

const achievements = [
  {
    achieved: true,
    title: 'Visit the Eiffel tower'
  },
  {
    achieved: true,
    title: 'Eat a Parisan crêpe'
  },
  {
    achieved: true,
    title: 'Visit the Sacré-Cœur'
  }
]

const dateOfVisit = 'May 2019'

export { header, highlights, achievements, dateOfVisit }
