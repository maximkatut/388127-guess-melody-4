export const genreQuestion = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `path`,
      genre: `rock`,
    },
    {
      src: `path`,
      genre: `blues`,
    },
    {
      src: `path`,
      genre: `jazz`,
    },
    {
      src: `path`,
      genre: `rock`,
    }
  ]
};

export const artistQuestion = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `path`,
  },
  answers: [{
    picture: `pic-one`,
    artist: `John Snow`,
  }, {
    picture: `pic-two`,
    artist: `Jack Daniels`,
  }, {
    picture: `pic-three`,
    artist: `Jim Beam`,
  }],
};

export const questions = [
  genreQuestion,
  artistQuestion
];
