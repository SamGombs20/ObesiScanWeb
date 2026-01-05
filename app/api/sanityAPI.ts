const url =
  "https://40v865zp.api.sanity.io/v2025-03-26/data/query/production" +
  "?query=*[_type=='blogPost']{" +
  "_id," +
  "title," +
  "'slug':slug.current," +
  "'body':body[children[].text!='']," +
  "mainImage{asset->{url}}," +
  "author->{_id,name,bio}," +
  "publishedAt" +
  "}";
export const getSanityData = async()=>{
    const res = await fetch(url,{
        method:"GET"
    })
    if(!res.ok){
        throw new Error("Failed to fetch Sanity data")
    }
    return res.json()
}