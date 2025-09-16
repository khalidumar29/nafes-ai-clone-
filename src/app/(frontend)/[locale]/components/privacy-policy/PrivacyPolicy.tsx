'use client'

const RichTextRenderer = ({ content }: { content: any }) => {
  const nodes = content?.root?.children

  if (!Array.isArray(nodes)) {
    return null
  }

  return (
    <>
      {nodes.map((node, i) => {
        if (node.type === 'paragraph' && node.children) {
          return (
            <p key={i} className="mb-4 text-gray-700">
              {node.children.map((child: any, j: number) => {
                return <span key={j}>{child.text}</span>
              })}
            </p>
          )
        }
        return null
      })}
    </>
  )
}

// Define the types for the component props
type Section = {
  id: string
  heading: string
  content: any // The content from Payload's rich text can be a complex object
}

type PrivacyPolicyBlockProps = {
  mainTitle: string
  sections: Section[]
}

const PrivacyPolicy = ({ mainTitle, sections = [] }: PrivacyPolicyBlockProps) => {
  return (
    <section className="min-h-screen container pt-10 pb-20">
      <h1 className="text-4xl font-bold mb-8">{mainTitle}</h1>

      <div className="space-y-8">
        {sections.map((section) => (
          <div key={section.id}>
            <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
            <RichTextRenderer content={section.content} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PrivacyPolicy
