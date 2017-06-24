/**
 * Created by hand on 2017/6/8.
 */
import description from '../../components/PagesComponents/Floor/description';

class Floor {
  constructor(obj) {
    this.name = obj.name;
    this.desc = obj.desc;
    this.components = {desc: description};
  }
}

// async function checkFloors() {
//   try {
//     let arr = [];
//     let res = await fetch('/resources/config');
//     if (res.ok) {
//       let data = await res.json();
//       data.forEach(value => {
//         arr.push(new Floor(value));
//       });
//       console.log(arr);
//       return arr;
//     }
//   } catch (e) {
//     console.log(e);
//   }
// }

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
  construct: {
    floors: fList
  }
};
