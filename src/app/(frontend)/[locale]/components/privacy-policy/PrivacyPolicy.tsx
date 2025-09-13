'use client'

// A component to render Payload's rich text field output.
const RichTextRenderer = ({ content }: { content: any }) => {
  // Payload's rich text field returns an object with a 'root' property.
  // The actual content nodes are in root.children.
  const nodes = content?.root?.children

  // Check if nodes is a valid array before attempting to map over it.
  if (!Array.isArray(nodes)) {
    return null
  }

  return (
    <>
      {nodes.map((node, i) => {
        // The type for a paragraph in Payload's editor is 'paragraph'.
        if (node.type === 'paragraph' && node.children) {
          return (
            <p key={i} className="mb-4 text-gray-700">
              {/* Map over the children of the paragraph to render text nodes */}
              {node.children.map((child: any, j: number) => {
                // TODO: Add checks for bold, italic, etc. using child.format
                return <span key={j}>{child.text}</span>
              })}
            </p>
          )
        }
        // Add more conditions here for other types like 'heading', 'ul', 'li', etc.
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
