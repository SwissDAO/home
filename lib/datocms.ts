
interface IRequestProps {
    query: string
    variables: string
    preview: string
}

export async function request(props: IRequestProps) {

    const { query, variables, preview } = props;

    let endpoint = "https://graphql.datocms.com";

    if (process.env.NEXT_DATOCMS_ENVIRONMENT) {
        endpoint += `/environments/${process.env.NEXT_DATOCMS_ENVIRONMENT}`;
    }

    if (preview) {
        endpoint += `/preview`;
    }

    const { body } = await fetch( endpoint, {
        headers: {
        authorization: `Bearer ${process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN}`,
        },
        method: "POST",
        body: JSON.stringify({a: query, b: variables})
    });

    // if (body.errors) {
    //     console.error("Ouch! The query has some errors!");
    //     throw body.errors;
    // }

    // return body.data;
}