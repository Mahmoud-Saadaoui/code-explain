import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const Explanation = ({ explanation }) => {
    return (
        <div className="glass p-8 rounded-2xl animate-fade-in">
            <h2 className="text-2xl font-bold mb-6 text-indigo-300 border-b border-indigo-500/30 pb-4">
                Explanation
            </h2>
            <div className="prose prose-invert max-w-none text-slate-300 leading-relaxed
                [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-violet-200 [&>h3]:mt-6 [&>h3]:mb-3
                [&>p]:mb-4
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4
                [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4
                [&>code]:bg-slate-800 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-indigo-200 [&>code]:font-mono [&>code]:text-sm
                [&>pre]:bg-slate-900/80 [&>pre]:p-4 [&>pre]:rounded-xl [&>pre]:overflow-x-auto [&>pre]:mb-6 [&>pre]:border [&>pre]:border-indigo-500/20
                [&>pre>code]:bg-transparent [&>pre>code]:p-0 [&>pre>code]:text-indigo-100
                [&>blockquote]:border-l-4 [&>blockquote]:border-indigo-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-slate-400
            ">
                <Markdown remarkPlugins={[remarkGfm]}>{explanation}</Markdown>
            </div>
        </div>
    )
}

export default Explanation