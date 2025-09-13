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
            <p key={i} className="mb-4">
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

type Section = {
  id: string
  heading: string
  content: any
}

type TermsAndConditionsBlockProps = {
  mainTitle: string
  introduction: any
  sections: Section[]
}

const TermsAndConditionsBlock = ({
  mainTitle,
  introduction,
  sections = [],
}: TermsAndConditionsBlockProps) => {
  return (
    <main className="container text-[#212529] text-sm py-10">
      <h1 className="text-3xl font-bold mb-8">{mainTitle}</h1>

      {introduction && (
        <div className="mb-8">
          <RichTextRenderer content={introduction} />
        </div>
      )}

      <div className="space-y-6">
        {sections.map((section) => (
          <div key={section.id}>
            <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
            <RichTextRenderer content={section.content} />
          </div>
        ))}
      </div>
    </main>
  )
}

export default TermsAndConditionsBlock
