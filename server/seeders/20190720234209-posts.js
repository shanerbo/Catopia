'use strict';
const model = require("../models/index");

async function userId(email) {
  return await model.Users.findUserByEmail(email).get('id');
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let erbosId = await userId("erbos@sfu.ca");
    let jiaranId = await userId("jiarany@sfu.ca");
    let ottoId = await userId("ohu@sfu.ca");
    let mcaId = await userId("mca176@sfu.ca");
    let d1 = await userId("dummy1@sfu.ca");
    let d2 = await userId("dummy2@sfu.ca");
    let d3 = await userId("dummy3@sfu.ca");
    let d4 = await userId("dummy4@sfu.ca");
    let d5 = await userId("dummy5@sfu.ca");
    let d6 = await userId("dummy6@sfu.ca");
    return queryInterface.bulkInsert('Posts',
      [
        {
          user_id: d2,
          description: "Teachers open the door. You enter by yourself.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          description: "America is a mistake, a giant mistake.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          description: "Only the hand that erases can write the true thing.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          description: "One should absorb the colour of life, but one should never remember its details. Details are always vulgar.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d5,
          description: "The mind is its own place, and in itself can make a Heaven of Hell, a Hell of Heaven.",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          user_id: d6,
          description: "Before we acquire great power, we must acquire wisdom to use it well.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d2,
          description: "Young in limbs, in judgement old.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          description: "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          description: "We confide in our strength, without boasting of it; we respect that of others, without fearing it.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          description: "I have long been of the opinion that if work were such a splendid thing the rich would have kept more of it for themselves.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          description: "Adversity causes some men to break; others to break records.",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          user_id: d2,
          description: "To establish oneself in the world, one does all one can to seem established there already.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d1,
          description: "Good manners will open doors that the best education cannot.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          description: "People that are really very weird can get into sensitive positions and have a tremendous impact on history.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          description: "Eye contact is the best accessory.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          description: "Unless man is committed to the belief that all mankind are his brothers, then he labors in vain and hypocritically in the vineyards of equality.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d1,
          description: "I believe in God, only I spell it Nature.",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          user_id: d1,
          description: "At the innermost core of all loneliness is a deep and powerful yearning for union with one's lost self.",
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          user_id: mcaId,
          description: "Is it sin to rush into the secret house of death, ere death dare come to us?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          description: "'Tis the most tender part of love, each other to forgive.",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          user_id: d1,
          description: "By heaven, I do love: and it hath taught me to rhyme, and to be mekancholy.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d4,
          description: "Our flag is red,white, and blue. But our nation is a rainbow-Red,Yellow,brown,black, and white-and we're all precious in God's sight.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d3,
          description: "Thank God I have done my duty.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d4,
          description: "He who denies the existence of a truth because it sounds negative creates a vacuum that draws the darkness unto him.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          description: "A good writer is not necessarily a good book critic. No more so than a good drunk is automatically a good bartender.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d5,
          description: "It is amazing that our souls -- our eternal essences, with all their hopes an dreams and visions of an eternal world -- are contained within these temporal bodies.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          description: "Some people feel the rain. Others just get wet.",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          user_id: d4,
          description: "This nation will never go back to the false comforts of the world before 9",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d2,
          description: "Do not count your chickens before they are hatched.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d3,
          description: "That government is best which governs the least because its people discipline themselves.",
          createdAt: new Date(),
          updatedAt: new Date()
        },




        {
          user_id: d1,
          description: "Against love's fire fear's frost hath dissolution.",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          user_id: d3,
          description: "There is no such thing as bad publicity except your own obituary.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          description: "If the point is sharp, and the arrow is swift, it can pierce through the dust no matter how thick.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d5,
          description: "I have one of those real old American built cars. The kind that just PUNCHES through accidents.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d2,
          description: "The only reward for love is the experience of loving.",
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          user_id: d6,
          description: "Do I not destroy my enemies when I make them my friends?",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d3,
          description: "The world is too dangerous for anything but truth and too small for anything but love.",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          user_id: d6,
          description: "When someone asks you, A penny for your thoughts, and you put your two cents in, what happens to the other penny?",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          user_id: mcaId,
          description: "Wherever there is authority, there is a natural inclination to disobedience.",
          createdAt: new Date(),
          updatedAt: new Date()
        },


        {
          user_id: d6,
          description: "Airplanes are interesting toys but of no military value.",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          user_id: d4,
          description: "Those that respect the law and love sausage should watch neither being made.",
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          user_id: d5,
          description: "Maybe someday I'll be able to shoot a film I'm proud of.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d3,
          description: "On with the dance! Let joy be undefined!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d5,
          description: "But if used for retribution, magic is vengeance incarnate.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: ottoId,
          description: "Saying goodbye doesn't mean anything. It's the time we spent together that matters, not how we left it.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: mcaId,
          description: "It's got to gestate. The word gestate. It's like when you're cooking a chicken. Turkey for Thanksgiving. My mother made the best turkey.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d6,
          description: "The reward for a thing well done is to have done it.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: d4,
          description: "The basis for optimism is sheer terror.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: erbosId,
          description: "One of the hardest tasks of leadership is understanding that you are not what you are, but what you're perceived to be by others.",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          user_id: jiaranId,
          description: "There comes a time in every man's life and I've had many of them.",
          createdAt: new Date(),
          updatedAt: new Date()
        },

      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
