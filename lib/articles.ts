import { ArticleThumbnail } from "../models/article";

// // export const blogarticles: Article[] = [
// //     {
// //         id: "yb-2023-01",
// //         category: 'DAO',
// //         title: 'How to build your own DAO',
// //         date: '2023-01-19',
// //         author: 'Yves Boutellier',
// //         coverImage: '/images/mock-articles/how-to-found-a-dao.jpeg',
// //         abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia vulputate elementum. Nullam quis neque eget sapien sollicitudin tristique efficitur id sapien.',
// //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia vulputate elementum. Nullam quis neque eget sapien sollicitudin tristique efficitur id sapien. Quisque nec velit at sem aliquet congue eget tempor tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce pellentesque sed eros vel pulvinar. Sed bibendum rhoncus hendrerit. Aliquam a velit vel ex eleifend varius nec nec mi. Donec commodo dapibus nunc, ut euismod ligula. Cras vel turpis non felis condimentum tincidunt ut non eros. In venenatis neque et odio lacinia laoreet. Quisque mollis ligula ante, non euismod ex condimentum a. Donec porttitor, sapien vulputate elementum rutrum, dui neque sollicitudin risus, sit amet auctor dolor velit in quam. Ut dui augue, ultrices a purus mollis, eleifend vulputate odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse a felis mauris. In hac habitasse platea dictumst. Sed malesuada fringilla placerat. Nullam eleifend, purus ac posuere consectetur, metus eros dictum tellus, at ullamcorper nunc enim varius eros. Aenean consectetur leo vel lacinia volutpat. Duis ultricies neque ornare, mollis nisi in, efficitur enim. Aliquam tincidunt sagittis blandit. Proin consequat eros id tellus tincidunt sollicitudin. Quisque commodo ex in vestibulum scelerisque. Donec varius mi erat, ac elementum neque cursus vel. Phasellus rutrum nibh sit amet risus consectetur luctus. Sed ut mi scelerisque massa ultrices semper sed non velit. Aenean lectus urna, porttitor nec erat vitae, imperdiet sodales turpis. Mauris lacus purus, mollis ut vulputate in, dapibus quis risus. Vestibulum id nunc mauris. Nulla ultricies, risus egestas imperdiet accumsan, dolor arcu sollicitudin nisl, nec accumsan risus sapien in dui. Pellentesque a eros dictum, egestas mi in, lacinia eros. Maecenas quis consectetur lectus. Maecenas a ligula at tellus blandit sollicitudin. Aenean dui nisi, consequat et suscipit ut, feugiat id dui. Fusce feugiat mi non finibus viverra. Curabitur tempor sem eget ex rhoncus, quis accumsan felis malesuada. Nullam eu vestibulum odio. Etiam tincidunt tortor id magna euismod pharetra. Morbi tempor tortor nibh, ac elementum ipsum molestie ut. Proin vel fermentum eros, id molestie risus. Duis ac ex urna. Nam vitae posuere nunc, non finibus magna. Duis pulvinar ex at arcu efficitur volutpat. Vivamus egestas porttitor tellus, et aliquam felis vehicula vitae. Maecenas fermentum, sapien sit amet pellentesque maximus, nulla urna semper urna, vitae hendrerit turpis eros ut dolor. In accumsan vitae magna et ornare. Nullam posuere ligula ligula, sit amet pretium ipsum condimentum vitae. Aliquam ornare fermentum arcu, sed accumsan metus euismod eu. Cras euismod tempus volutpat. Proin ut maximus lectus, a tempor sapien. Nunc sed nibh eget nisi suscipit viverra. In hac habitasse platea dictumst.',
// //         slug: 'how-to-build-your-own-dao'
// //     },
// //     {
// //         id: "ab-2023-01",
// //         category: 'MEV',
// //         title: 'How to beat the Odds in MEV competition',
// //         date: '2023-01-24',
// //         author: 'Amin B',
// //         coverImage: '/images/mock-articles/mev-image.jpeg',
// //         abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia vulputate elementum. Nullam quis neque eget sapien sollicitudin tristique efficitur id sapien.',
// //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia vulputate elementum. Nullam quis neque eget sapien sollicitudin tristique efficitur id sapien. Quisque nec velit at sem aliquet congue eget tempor tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce pellentesque sed eros vel pulvinar. Sed bibendum rhoncus hendrerit. Aliquam a velit vel ex eleifend varius nec nec mi. Donec commodo dapibus nunc, ut euismod ligula. Cras vel turpis non felis condimentum tincidunt ut non eros. In venenatis neque et odio lacinia laoreet. Quisque mollis ligula ante, non euismod ex condimentum a. Donec porttitor, sapien vulputate elementum rutrum, dui neque sollicitudin risus, sit amet auctor dolor velit in quam. Ut dui augue, ultrices a purus mollis, eleifend vulputate odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse a felis mauris. In hac habitasse platea dictumst. Sed malesuada fringilla placerat. Nullam eleifend, purus ac posuere consectetur, metus eros dictum tellus, at ullamcorper nunc enim varius eros. Aenean consectetur leo vel lacinia volutpat. Duis ultricies neque ornare, mollis nisi in, efficitur enim. Aliquam tincidunt sagittis blandit. Proin consequat eros id tellus tincidunt sollicitudin. Quisque commodo ex in vestibulum scelerisque. Donec varius mi erat, ac elementum neque cursus vel. Phasellus rutrum nibh sit amet risus consectetur luctus. Sed ut mi scelerisque massa ultrices semper sed non velit. Aenean lectus urna, porttitor nec erat vitae, imperdiet sodales turpis. Mauris lacus purus, mollis ut vulputate in, dapibus quis risus. Vestibulum id nunc mauris. Nulla ultricies, risus egestas imperdiet accumsan, dolor arcu sollicitudin nisl, nec accumsan risus sapien in dui. Pellentesque a eros dictum, egestas mi in, lacinia eros. Maecenas quis consectetur lectus. Maecenas a ligula at tellus blandit sollicitudin. Aenean dui nisi, consequat et suscipit ut, feugiat id dui. Fusce feugiat mi non finibus viverra. Curabitur tempor sem eget ex rhoncus, quis accumsan felis malesuada. Nullam eu vestibulum odio. Etiam tincidunt tortor id magna euismod pharetra. Morbi tempor tortor nibh, ac elementum ipsum molestie ut. Proin vel fermentum eros, id molestie risus. Duis ac ex urna. Nam vitae posuere nunc, non finibus magna. Duis pulvinar ex at arcu efficitur volutpat. Vivamus egestas porttitor tellus, et aliquam felis vehicula vitae. Maecenas fermentum, sapien sit amet pellentesque maximus, nulla urna semper urna, vitae hendrerit turpis eros ut dolor. In accumsan vitae magna et ornare. Nullam posuere ligula ligula, sit amet pretium ipsum condimentum vitae. Aliquam ornare fermentum arcu, sed accumsan metus euismod eu. Cras euismod tempus volutpat. Proin ut maximus lectus, a tempor sapien. Nunc sed nibh eget nisi suscipit viverra. In hac habitasse platea dictumst.',
// //         slug: 'how-to-beat-the-odds-in-mev-competition'
// //     },
// //     {
// //         id: "ow-2023-01",
// //         category: 'Engineering',
// //         title: 'How to overengineer a product',
// //         date: '2023-02-01',
// //         author: 'Olivier Winkler',
// //         coverImage: '/images/mock-articles/how-to-overengineer.jpeg',
// //         abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia vulputate elementum. Nullam quis neque eget sapien sollicitudin tristique efficitur id sapien.',
// //         content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lacinia vulputate elementum. Nullam quis neque eget sapien sollicitudin tristique efficitur id sapien. Quisque nec velit at sem aliquet congue eget tempor tellus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce pellentesque sed eros vel pulvinar. Sed bibendum rhoncus hendrerit. Aliquam a velit vel ex eleifend varius nec nec mi. Donec commodo dapibus nunc, ut euismod ligula. Cras vel turpis non felis condimentum tincidunt ut non eros. In venenatis neque et odio lacinia laoreet. Quisque mollis ligula ante, non euismod ex condimentum a. Donec porttitor, sapien vulputate elementum rutrum, dui neque sollicitudin risus, sit amet auctor dolor velit in quam. Ut dui augue, ultrices a purus mollis, eleifend vulputate odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse a felis mauris. In hac habitasse platea dictumst. Sed malesuada fringilla placerat. Nullam eleifend, purus ac posuere consectetur, metus eros dictum tellus, at ullamcorper nunc enim varius eros. Aenean consectetur leo vel lacinia volutpat. Duis ultricies neque ornare, mollis nisi in, efficitur enim. Aliquam tincidunt sagittis blandit. Proin consequat eros id tellus tincidunt sollicitudin. Quisque commodo ex in vestibulum scelerisque. Donec varius mi erat, ac elementum neque cursus vel. Phasellus rutrum nibh sit amet risus consectetur luctus. Sed ut mi scelerisque massa ultrices semper sed non velit. Aenean lectus urna, porttitor nec erat vitae, imperdiet sodales turpis. Mauris lacus purus, mollis ut vulputate in, dapibus quis risus. Vestibulum id nunc mauris. Nulla ultricies, risus egestas imperdiet accumsan, dolor arcu sollicitudin nisl, nec accumsan risus sapien in dui. Pellentesque a eros dictum, egestas mi in, lacinia eros. Maecenas quis consectetur lectus. Maecenas a ligula at tellus blandit sollicitudin. Aenean dui nisi, consequat et suscipit ut, feugiat id dui. Fusce feugiat mi non finibus viverra. Curabitur tempor sem eget ex rhoncus, quis accumsan felis malesuada. Nullam eu vestibulum odio. Etiam tincidunt tortor id magna euismod pharetra. Morbi tempor tortor nibh, ac elementum ipsum molestie ut. Proin vel fermentum eros, id molestie risus. Duis ac ex urna. Nam vitae posuere nunc, non finibus magna. Duis pulvinar ex at arcu efficitur volutpat. Vivamus egestas porttitor tellus, et aliquam felis vehicula vitae. Maecenas fermentum, sapien sit amet pellentesque maximus, nulla urna semper urna, vitae hendrerit turpis eros ut dolor. In accumsan vitae magna et ornare. Nullam posuere ligula ligula, sit amet pretium ipsum condimentum vitae. Aliquam ornare fermentum arcu, sed accumsan metus euismod eu. Cras euismod tempus volutpat. Proin ut maximus lectus, a tempor sapien. Nunc sed nibh eget nisi suscipit viverra. In hac habitasse platea dictumst.',
// //         slug: 'how-to-overengineer-a-product'    
// //     }
// // ]

// // export function getAllArticles() {
// //     return blogarticles;
// // }
  

// const SLUG_QUERY = `query SlugsOfAllBlogs {
//     allBlogArticles {
//       slug
//     }
// }`

// export function getAllSlugs() {
//     let slugs: string[] = [];
//     getAllArticles().map((article) => slugs.push(`/blog/${article.slug}`));
//     return slugs;
// }

// export function getPostData(slug: string): Article {
//     let article: Article | undefined = undefined;
//     getAllArticles().map((p) => {
//       if (p.slug === slug) {
//         article = p;
//         return;
//       }
//     });
//     return article || {
//         id: '',
//         category: '',
//         title: '',
//         date: '',
//         author: '',
//         coverImage: {
//             url: '',
//             width: 0,
//             height: 0,
//             format: '',
//             filename: ''
//         },
//         content: '',
//         abstract: '',
//         slug: ''
//     };  
// }
  
