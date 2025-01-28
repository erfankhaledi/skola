import React from "react"
import brandsvg from "../assets/img/brand.svg"

export default function Header(){
    return (
        <header className="navbar navbar-expand-xl navbar-light bg-white border-bottom border-xl-0 py-2 py-xl-4">
            <div className="container-fluid">
                <a href="#" className="navbar-brand me-0">
                    <img src={brandsvg} className="navbar-brand-img" alt="..." />
                </a>
            </div>
        </header>
    )
}