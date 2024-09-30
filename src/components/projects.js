import React from "react";

export default function Projects() {
    return (
        <div className="py-24">
            <div className="text-white py-12 text-4xl font-bold flex justify-center">
                My Projects
            </div>
            <div className="flex space-x-12 group overflow-hidden">
                <div className="flex space-x-12 animate-loop-scroll group-hover:paused">
                    <div className="text-white text-2xl border border-white p-48 rounded-lg">
                        <h1>Minishell</h1>
                    </div>
                    <div className="text-white text-2xl border border-white p-48 rounded-lg">
                        <h1>CUB3D</h1>
                    </div>
                    <div className="text-white text-2xl border border-white p-48 rounded-lg">
                        <h1>Bookmark</h1>
                    </div>
                </div>
                <div className="flex space-x-12 animate-loop-scroll group-hover:paused" aria-hidden="true">
                    <div className="text-white text-2xl border border-white p-48 rounded-lg">
                        <h1>Minishell</h1>
                    </div>
                    <div className="text-white text-2xl border border-white p-48 rounded-lg">
                        <h1>CUB3D</h1>
                    </div>
                    <div className="text-white text-2xl border border-white p-48 rounded-lg">
                        <h1>Bookmark</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}