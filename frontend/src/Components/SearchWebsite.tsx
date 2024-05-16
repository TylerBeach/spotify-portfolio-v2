import React, { useState, useEffect } from 'react'
import Data from '../data.json'
import { Project } from '../interfaces/project'
import { About } from '../interfaces/about'
import Link from 'next/link';


interface SearchResult {
    type: 'project' | 'about';
    data: Project | About;
    matchingSentences: string[];
  }
  
  export default function SearchWebsite() {
    const [searchData, setSearchData] = useState<string>("")
    const [resultsData, setResultsData] = useState<SearchResult[]>([])
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchData(e.target.value)
    }
  
    useEffect(() => {
      const filterData = () => {
        const search = searchData.toLowerCase()
  
        const findMatchingSentences = (value: any): string[] => {
          let matches: string[] = []
  
          if (typeof value === 'string') {
            const sentences = value.split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/)
            sentences.forEach(sentence => {
              if (sentence.toLowerCase().includes(search)) {
                if (!sentence.includes("/images") && !sentence.includes("http")) {
                    matches.push(sentence)
                }
              }
            })
          } else if (Array.isArray(value)) {
            value.forEach(item => {
              matches = matches.concat(findMatchingSentences(item))
            })
          } else if (typeof value === 'object' && value !== null) {
            Object.values(value).forEach(val => {
              matches = matches.concat(findMatchingSentences(val))
            })
          }
          return matches
        }
  
        const projectResults: SearchResult[] = Data.projects.map((project: Project) => {
          const matchingSentences = findMatchingSentences(project)
          return {
            type: 'project',
            data: project,
            matchingSentences
          }
        }).filter(result => result.matchingSentences.length > 0)
  
        const aboutResults: SearchResult[] = Data.about.paragraphs.map(paragraph => {
          const matchingSentences = findMatchingSentences(paragraph)
          return {
            type: 'about',
            data: {
              ...Data.about,
              paragraphs: [paragraph]
            },
            matchingSentences
          }
        }).filter(result => result.matchingSentences.length > 0)
  
        setResultsData([...projectResults, ...aboutResults])
      }
  
      filterData()
    }, [searchData])
  
    return (
      <div>
        <input 
          type="search" 
          onChange={handleChange} 
          value={searchData}
          placeholder="Search for something in this website" 
          className="w-full h-10 p-2 rounded-md bg-[#121212] text-white"
        />
        <div className="mt-4">
          {searchData.length > 0 ? 
          <div>
          
            {resultsData.length > 0 ? (
                resultsData.map((result, index) => (
                <div key={index} className="p-2 bg-[#1a1a1a] rounded-md mb-2">
                    {result.type === 'project' ? (
                    <Link href={`/projects/${result.data.id}`}>
                        <h2 className="text-white">{(result.data as Project).title}</h2>
                        <p className="text-gray-400">{(result.data as Project).cardDescription}</p>
                        <div className="text-gray-400 mt-2">
                        {result.matchingSentences.map((sentence, idx) => (
                            <p key={idx}>{sentence}</p>
                        ))}
                        </div>
                    </Link>
                    ) : (
                    <Link href={`/about`}>
                        <h2 className="text-white">{(result.data as About).title}</h2>
                        <p className="text-gray-400">{(result.data as About).firstName} {(result.data as About).lastName}</p>
                        <div className="text-gray-400 mt-2">
                        {result.matchingSentences.map((sentence, idx) => (
                            <p key={idx}>{sentence}</p>
                        ))}
                        </div>
                    </Link>
                    )}
                </div>
                ))
            ) : (
                <p className="text-gray-400">No results found</p>
            )}
            </div> : (
            <p className="text-gray-400"></p>
            )}
        </div>
      </div>
    )
  }