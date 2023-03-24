enum Grade {
  U,
  D,
  C,
  B,
  A
};
// Grade.U = 0
// Grade.D = 1
// and so on...


// You can change their values
enum Place {
  FIRST = 1,
  SECOND,
  THIRD,
  LOST = 404,
  NEXT_LOST
}
// Place.FIRST = 1
// Place.SECOND = 2
// and so on...
// Place.LOST = 404
// Place.NEXT_LOST = 405

// Using strings
enum Metal {
  BRONZE = 'bronze',
  SILVER = 'silver',
  GOLD = 'gold'
}