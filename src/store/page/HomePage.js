class Floor {
  constructor(obj) {
    this.name = obj.name;
    this.desc = obj.desc;
  }
}

const config = [
  {
    name: 'Desktop',
    desc: 'Just some desc...'
  },
  {
    name: 'Mall',
    desc: 'Just some desc...'
  },
  {
    name: 'BBS',
    desc: 'Just some desc...'
  },
  {
    name: 'Audio',
    desc: 'Just some desc...'
  },
  {
    name: 'Video',
    desc: 'Just some desc...'
  },
];

let fList = [];
config.forEach(value => {
  fList.push(new Floor(value));
});

export default {
  floors: {...fList}
};
