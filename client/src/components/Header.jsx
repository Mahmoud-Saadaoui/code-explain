import React from 'react'

const Header = () => {
    return (
        <header className="mb-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-sm">
                CodExplainer
            </h1>
            <p className="mt-2 text-slate-400 text-lg">
                Understand your code with AI-powered clarity
            </p>
        </header>
    )
}

export default Header