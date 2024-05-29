import React, { useState, useEffect } from 'react'
import Data from '../data.json'
import { Project } from '../interfaces/project'
import { About } from '../interfaces/about'
import { Navbar } from '../interfaces/navbar'
import { NavbarItem } from '../interfaces/navbarItem'
import Link from 'next/link';


interface SearchResult {
  type: 'project' | 'about' | 'navbar';
  data: Project | About | Navbar;
  matchingSentences: string[];
}

type NavbarSection = 'sectionOne' | 'Quick Browse' | 'My Links' | 'Spotify Links';


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
            const excludedTerms = ["/images", "http", "mailto", "/"]
            if (sentence.toLowerCase().includes(search)) {
              if (excludedTerms.some(term => sentence.toLowerCase().includes(term))) return
              else {
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

      const projectResults: any[] = Data.projects.map((project: Project) => {
        const matchingSentences = findMatchingSentences(project)
        return {
          type: 'project',
          data: project,
          matchingSentences
        }
      }).filter(result => result.matchingSentences.length > 0)

      const aboutResults: any[] = [
        ...Data.about.paragraphs.map(paragraph => {
          const matchingSentences = findMatchingSentences(paragraph)
          return {
            type: 'about',
            data: {
              ...Data.about,
              paragraphs: [paragraph]
            },
            matchingSentences
          }
        }),
        ...Data.about.courseWork.map(course => {
          const matchingSentences = findMatchingSentences(course)
          return {
            type: 'about',
            data: Data.about,
            matchingSentences
          }
        })
      ].filter(result => result.matchingSentences.length > 0)

      const navbarSections: NavbarSection[] = ['sectionOne', 'Quick Browse', 'My Links', 'Spotify Links'];
      const navbarResults:any= navbarSections.flatMap((section: NavbarSection) => {
        return Data.navbar[section].map((item: any) => {
          const matchingSentences = findMatchingSentences(item)
          return {
            type: 'navbar',
            data: item,
            matchingSentences
          }
        }).filter((result: any) => result.matchingSentences.length > 0)
      });
      setResultsData([...projectResults, ...aboutResults, ...navbarResults])
    }

    filterData()
  }, [searchData])

  return (
    <div className='mx-4 md:ml-0'>
      <input 
        type="search" 
        onChange={handleChange} 
        value={searchData}
        placeholder="Search for something in this website" 
        className="search SpotifyLightFont md:ml-32 w-full md:w-[300px] h-10 p-2 rounded-md bg-[#272727] text-white"
      />
      <div className="mt-4">
      {searchData.length > 0 ? 
        (<div>
          {resultsData.length > 0 ? (
            resultsData.map((result, index) => (
                <div key={index} className="p-2 bg-[#1a1a1a] rounded-md mb-2">
                {result.type === 'project' ? (
                    <Link href={`/projects/${(result.data as Project).id}`}>
                    <h2 className="text-white">Project: {(result.data as Project).title}</h2>
                    <p className="text-gray-400">{(result.data as Project).cardDescription}</p>
                  <div className="text-gray-400 mt-2 SpotifyLightFont">
                  {result.matchingSentences.map((sentence, idx) => (
                      <p key={idx}>{sentence}</p>
                  ))}
                  </div>
                    </Link>
                  ) : result.type === 'about' ? (
                      <Link href={`/about`}>
                      <h2 className="text-white">About: {(result.data as About).title}</h2>
                      <p className="text-gray-400">{(result.data as About).firstName} {(result.data as About).lastName}</p>
                      <div className="text-gray-400 mt-2 SpotifyLightFont">
                  {result.matchingSentences.map((sentence, idx) => (
                      <p key={idx}>{sentence}</p>
                  ))}
                  </div>
                      </Link>
                  ) : (
                      <Link href={`${(result.data as NavbarItem).link}`}>
                      <h2 className="text-white">{(result.data as NavbarItem).title}</h2>
                      <div className="text-gray-400 mt-2 SpotifyLightFont">
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
          </div>)
      : (
          <p className="text-gray-400 md:px-4">Search for keywords, technologies or anything you hope to find about me!</p>
      )}
      </div>
    </div>
  )
}
