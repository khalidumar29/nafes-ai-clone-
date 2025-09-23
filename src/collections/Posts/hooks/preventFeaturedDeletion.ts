import { APIError, type CollectionBeforeDeleteHook } from 'payload'

export const preventFeaturedDeletion: CollectionBeforeDeleteHook = async ({ req, id }) => {
  const blogPage = await req.payload.findGlobal({
    slug: 'blog-page',
    depth: 0,
    overrideAccess: true,
  })

  const featured = blogPage?.featuredPost
  const featuredId = typeof featured === 'object' && featured !== null ? featured.id : featured

  if (featuredId != null && String(featuredId) === String(id)) {
    throw new APIError(
      'Cannot delete this post while it is selected as the featured post. Please choose a different featured post in the Blog Page global settings first.',
      400,
    )
  }
}
