const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/journal');

const Journal = require('../models/journal-entry');


const entries = [
  {
  title: "Day 1",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consectetur ullamcorper iaculis. Donec ac porta orci, sit amet rutrum tellus. Integer convallis sed ex at pretium. Sed vitae ligula est. Donec in nulla eget nulla tincidunt tempus vitae ac diam. Integer finibus porta sodales. Nunc lorem enim, egestas nec arcu et, hendrerit venenatis purus. Mauris eu nunc a erat varius auctor eget vitae massa. Sed pretium eu ipsum id fermentum. Vestibulum hendrerit at nisl vitae sodales. Donec at tortor et lacus fringilla tincidunt vel quis sem. Morbi ac porta orci."
  },
  {
  title: "Day 2",
  content: "Nullam finibus dapibus consequat. Nunc a commodo ligula, sit amet posuere massa. Nam orci arcu, ornare eget tincidunt nec, faucibus id neque. Fusce urna enim, faucibus sed tempor quis, blandit et orci. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat nulla molestie auctor feugiat. Ut eu ante risus. Donec eget diam nisi. Nulla et dui nec odio dictum placerat non vel orci. Sed id dui ac ante laoreet suscipit sit amet vitae orci. Duis quis consectetur diam. Suspendisse feugiat, odio consectetur vestibulum pharetra, est urna scelerisque eros, nec mattis arcu nisl a tortor. Pellentesque ut egestas nunc. Donec orci risus, ultrices vel molestie a, dignissim sed mi. Proin libero felis, sagittis et mi in, suscipit dignissim dui."
  },
  {
  title: "Day 3",
  content: "Vestibulum rutrum est vitae enim facilisis, eu mollis lorem eleifend. Duis eget justo hendrerit, tempus orci ut, tincidunt lacus. Pellentesque vitae leo eu justo euismod consectetur ultrices et diam. Sed eleifend id diam consectetur dapibus. Fusce facilisis tellus purus, et scelerisque metus vestibulum nec. Aenean dapibus nisi ut leo pellentesque pellentesque. Ut molestie molestie lacus rutrum elementum. Phasellus risus justo, posuere a porttitor vitae, feugiat in dolor. Vestibulum ut elementum est. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec posuere, elit in sollicitudin pharetra, orci est commodo mauris, eget viverra neque nunc nec turpis. Suspendisse in urna vel quam aliquet interdum ac eu neque. Aenean nec mi est. Vestibulum rutrum sapien at erat volutpat, id ornare est tincidunt."
  },
  {
  title: "Day 4",
  content: "Nam et varius turpis. Phasellus risus elit, tincidunt pellentesque nisi vel, accumsan mattis felis. Donec interdum lectus lacinia velit varius sodales. Sed eu lorem ut nisl commodo pretium at vitae libero. Nam bibendum nunc ut euismod maximus. Sed iaculis facilisis eros non interdum. Nullam interdum, quam non condimentum feugiat, nulla dolor laoreet turpis, pretium venenatis dui dui ac mi. Proin non posuere est, sit amet consectetur velit. Sed volutpat in mi convallis scelerisque. Aenean congue ipsum sed accumsan lobortis. Morbi sodales, ligula ut sagittis vulputate, orci enim pellentesque nulla, pulvinar commodo arcu orci dapibus nunc. Cras elit nulla, imperdiet ac lacinia sed, placerat quis enim. Phasellus iaculis tincidunt nibh, a placerat enim ullamcorper vel."
  },
  {
  title: "Day 5",
  content: "Vivamus auctor ligula non tempor eleifend. Nunc volutpat metus at mi malesuada cursus. Curabitur faucibus massa ut leo sollicitudin, in laoreet elit egestas. Suspendisse felis nisl, bibendum a fermentum quis, aliquet non nisl. Curabitur eros diam, condimentum scelerisque varius quis, dictum et velit. Curabitur vel bibendum urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed euismod maximus enim eu efficitur. Quisque ut rutrum arcu. Maecenas nec consectetur erat, porttitor mollis eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  },
  {
  title: "Day 6",
  content: "Ut mattis turpis sit amet tincidunt finibus. Quisque pharetra interdum tellus, non lacinia purus congue et. Praesent sed augue ex. Morbi sapien risus, imperdiet quis lorem et, aliquet viverra ex. Donec consectetur diam a ullamcorper dictum. Ut laoreet euismod elit, at ullamcorper sapien eleifend quis. Vivamus at dignissim lectus. Praesent tempus dui vel eros fermentum vestibulum. Sed lectus ligula, scelerisque ac lacinia non, sollicitudin in nisl."
  },
  {
  title: "Day 7",
  content: "Mauris tincidunt nulla vel sapien facilisis, vitae tristique ante tincidunt. Praesent non lobortis massa. Vivamus id urna et dolor tincidunt venenatis id at erat. Aliquam erat volutpat. Maecenas nec venenatis ex. Nunc nisl risus, laoreet ut nulla non, dictum dignissim mi. Vivamus interdum lobortis sagittis. Cras vitae convallis urna. Curabitur id convallis sapien. Curabitur sollicitudin augue massa, eget consequat diam vulputate in. Suspendisse dignissim erat malesuada quam mattis blandit. Donec sodales in purus at venenatis. Aliquam felis eros, sodales id orci ac, luctus pharetra ligula. Aenean laoreet volutpat bibendum."
  },
  {
  title: "Day 8",
  content: "Aenean tempor volutpat vehicula. Pellentesque fringilla, metus non lobortis vestibulum, ipsum turpis tincidunt tellus, hendrerit sodales purus elit nec mi. Phasellus euismod imperdiet neque vitae ultricies. Maecenas id commodo odio. Phasellus diam metus, vehicula fringilla finibus ac, placerat quis purus. Integer vitae porta diam, vitae eleifend purus. Sed blandit arcu eu felis pharetra blandit. Aliquam luctus faucibus erat, a congue dui iaculis ut. Sed tempus non elit ut dictum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
  },
  {
  title: "Day 9",
  content: "Aliquam facilisis quis ipsum et scelerisque. Donec vehicula, neque ut ullamcorper blandit, arcu massa tincidunt libero, id dapibus dui elit non turpis. Praesent ac tempor lectus, at bibendum libero. Nullam quis congue elit. Praesent sed consectetur sem. Suspendisse potenti. Donec euismod ex in pellentesque suscipit. Sed in dui fermentum, pretium mi sed, tristique sapien. Sed egestas, massa ultricies dignissim laoreet, dolor magna ultrices nisi, non lobortis sapien lorem eget sapien. Aenean imperdiet metus arcu, ut consequat massa bibendum non. Nunc condimentum imperdiet purus in sodales. Duis nisl diam, finibus a diam in, ultricies congue lectus. Proin congue enim a eros sollicitudin, vitae tempor metus auctor."
  },
  {
  title: "Day 10",
  content: "Cras nunc sem, tristique id nulla ut, cursus ultricies mauris. Nullam iaculis, ante nec venenatis venenatis, arcu justo porta nisl, quis placerat ligula enim at lacus. Fusce consequat nibh quis ipsum aliquam consectetur. Etiam a sapien vitae neque aliquam tincidunt nec vitae nisl. Duis urna purus, interdum id consequat vitae, rutrum et dui. Phasellus in elementum erat. Etiam sodales nunc id cursus condimentum. Pellentesque porta mattis varius. Pellentesque tincidunt ex non lacus convallis sollicitudin. Sed tincidunt, tortor vel bibendum dignissim, quam risus cursus arcu, id aliquam felis turpis at lacus."
  }
];


Journal.remove({}, (err, docs) => {
  if (err) { throw err };
  Journal.create(entries, (err, docs) => {
    if (err) { throw err };
    docs.forEach( (entries) => {
      console.log(entries.title);
    });
    mongoose.connection.close();
  });
});
