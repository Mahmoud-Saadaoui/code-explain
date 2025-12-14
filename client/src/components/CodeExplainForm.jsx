import { useActionState } from 'react'
import { explain } from '../actions';
import Explanation from './Explanation';
import { Error } from './Error';

const CodeExplainForm = () => {
    const [formState, formAction, isPending] = useActionState(explain, null);
    return (
        <div>
            <form action={formAction} className="glass p-8 rounded-2xl mb-8 space-y-6">
                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300 ml-1">Language</label>
                    <div className="relative">
                        <select
                            name="language"
                            className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 appearance-none cursor-pointer hover:bg-slate-900/70 transition-colors"
                        >
                            <option value="python">Python</option>
                            <option value="javascript">JavaScript</option>
                            <option value="java">Java</option>
                            <option value="c++">C++</option>
                            <option value="typescript">TypeScript</option>
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="block text-sm font-medium text-slate-300 ml-1">Code Snippet</label>
                    <textarea
                        name="code"
                        required
                        placeholder='Paste your code here ...'
                        className="w-full h-48 bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-slate-200 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 placeholder:text-slate-600 resize-none scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent"
                    />
                </div>

                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/20 transform transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                >
                    {isPending ? (
                        <>
                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            <span>Analyzing Code...</span>
                        </>
                    ) : (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 19h4.25L14 13.639h-2.75l.813-3.096m-6.813 5.361H4.25L5.062 12h3.5l-.813 3.096Zm11.5 0h-3.5l.813-3.096h3.5L16.25 15.096Z" />
                            </svg>
                            <span>Explain Code</span>
                        </>
                    )}
                </button>
            </form>

            <div className="transition-all duration-500 ease-in-out">
                {isPending ? (
                    <div className="flex flex-col items-center justify-center py-12 text-slate-400 gap-4 animate-pulse">
                        <div className="h-2 w-24 bg-slate-700 rounded-full"></div>
                        <p className="text-sm font-medium">AI is thinking...</p>
                    </div>
                ) : (
                    formState?.success ? (
                        <Explanation explanation={formState?.data.explanation} />
                    ) : (
                        formState?.success === false && (
                            <Error error={formState?.error} />
                        )
                    )
                )}
            </div>
        </div>
    )
}

export default CodeExplainForm