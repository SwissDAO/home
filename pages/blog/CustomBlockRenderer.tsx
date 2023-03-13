import { StructuredText} from 'react-datocms'
// import {StructuredTextBlock} from 'react-datocms/dist/components/StructuredTextBlock';


export const MyCustomBlockRenderer = ({ node }: RenderBlockContext ) => {
    switch (node.type) {
      case 'heading':
        return <h1>{node.content}</h1>;
      case 'paragraph':
        return <p>{node.content}</p>;
      default:
        return <div>Unsupported block type</div>;
    }
  };
  