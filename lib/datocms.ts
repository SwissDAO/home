import { GraphQLClient } from "graphql-request";


interface IRequestProps {
    query: string
    variables?: Object
    preview?: boolean
}

export async function request(props: IRequestProps) {

    const { query, variables, preview } = props;

    const endpoint = preview ? "https://graphql.datocms.com/preview" : "https://graphql.datocms.com";

    const client = new GraphQLClient(endpoint, {
        headers: {authorization: `Bearer ${process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN}`
        },
    });
    return client.request(query, variables);
}