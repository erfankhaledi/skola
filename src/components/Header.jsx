import React, { useState } from "react";
import brandsvg from "../assets/img/brand.svg";

export default function Header() {
    // State to manage dropdown visibility
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // Handlers to open and close the dropdown
    const handleMouseEnter = () => setDropdownOpen(true);
    const handleMouseLeave = () => setDropdownOpen(false);

    return (
        <header className="navbar navbar-expand-xl navbar-light bg-white border-bottom border-xl-0 py-2 py-xl-4">
            <div className="container-fluid">
                <a href="#" className="navbar-brand me-0" onClick={(e) => e.preventDefault()}>
                    <img src={brandsvg} className="navbar-brand-img" alt="Brand Logo" />
                </a>
                <ul className="navbar-nav navbar-vertical ms-xl-4 d-none d-xl-flex">
                    <li 
                        className="nav-item dropdown" 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                    >
                        <a href="#" className="nav-link pb-4 mb-n4 px-0 pt-0" id="navbarVerticalMenu">
                            <div className="bg-primary rounded py-3 px-5 d-flex align-items-center">
                                <div className="me-3 ms-1 d-flex text-white">
                                    <svg width={25} height={15} viewBox="0 0 25 17" xmlns="http://www.w3.org/2000/svg">
                                        <rect width={25} height={1} fill="currentColor"></rect>
                                        <rect y={8} width={15} height={1} fill="currentColor"></rect>
                                        <rect y={16} width={20} height={1} fill="currentColor"></rect>
                                    </svg>
                                </div>
                                <span className="text-white fw-medium me-1">Courses</span>
                            </div>
                        </a>
                        
                        <ul className={`dropdown-menu dropdown-menu-md bg-primary rounded py-4 mt-4 ${dropdownOpen ? "show" : ""}`} aria-labelledby="navbarVerticalMenu">
                            <li className="dropdown-item dropright">
                                <a href="#" className="dropdown-link dropdown-toggle">
                                    <div className="me-4 d-flex align-items-center text-white icon-xs">
                                        <svg style={{ marginRight: '20px' }} width={20} height={21} viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5247 5.64759C10.3104 5.21736 9.6919 5.21322 9.47557 5.64759L5.37401 13.8898C5.28096 14.0767 5.29443 14.299 5.4094 14.4734L7.65635 17.8813V20.0493C7.65635 20.3729 7.91869 20.6352 8.24229 20.6352H11.7579C12.0815 20.6352 12.3439 20.3729 12.3439 20.0493V17.8813L14.5908 14.4734C14.7058 14.299 14.7192 14.0767 14.6262 13.8898L10.5247 5.64759ZM11.172 19.4633H8.82822V18.2915H11.172V19.4633ZM11.4424 17.1196H8.55779L6.57342 14.1099L9.41416 8.40131V14.1508C9.41416 14.4744 9.67651 14.7368 10.0001 14.7368C10.3237 14.7368 10.586 14.4744 10.586 14.1508V8.40131L13.4268 14.1099L11.4424 17.1196Z" fill="currentColor" fill-opacity="0.6"></path>
                                            <path d="M18.2422 0.635132C17.4783 0.635132 16.827 1.12501 16.5852 1.80701H11.7578V1.22107C11.7578 0.897476 11.4955 0.635132 11.1719 0.635132H8.82812C8.50453 0.635132 8.24219 0.897476 8.24219 1.22107V1.80701H3.41484C3.17297 1.12501 2.52168 0.635132 1.75781 0.635132C0.788555 0.635132 0 1.42369 0 2.39294C0 3.3622 0.788555 4.15076 1.75781 4.15076C2.52168 4.15076 3.17297 3.66048 3.41484 2.97849H5.60676C2.87645 4.5465 1.17188 7.44322 1.17188 10.5961C1.17188 10.9197 1.43422 11.182 1.75781 11.182C2.08141 11.182 2.34375 10.9197 2.34375 10.5961C2.34375 7.06076 4.8359 3.98591 8.24219 3.18271V3.56482C8.24219 3.88841 8.50453 4.15076 8.82812 4.15076H11.1719C11.4955 4.15076 11.7578 3.88841 11.7578 3.56482V3.18267C15.1641 3.98591 17.6562 7.06076 17.6562 10.5961C17.6562 10.9197 17.9186 11.182 18.2422 11.182C18.5658 11.182 18.8281 10.9197 18.8281 10.5961C18.8281 7.44724 17.127 4.54884 14.3932 2.97888H16.5852C16.827 3.66087 17.4783 4.15076 18.2422 4.15076C19.2114 4.15076 20 3.3622 20 2.39294C20 1.42369 19.2114 0.635132 18.2422 0.635132ZM1.75781 2.97888C1.43473 2.97888 1.17188 2.71603 1.17188 2.39294C1.17188 2.06986 1.43473 1.80701 1.75781 1.80701C2.0809 1.80701 2.34375 2.06986 2.34375 2.39294C2.34375 2.71603 2.0809 2.97888 1.75781 2.97888ZM10.5859 2.97888H9.41406V1.80701H10.5859V2.97888ZM18.2422 2.97888C17.9191 2.97888 17.6562 2.71603 17.6562 2.39294C17.6562 2.06986 17.9191 1.80701 18.2422 1.80701C18.5653 1.80701 18.8281 2.06986 18.8281 2.39294C18.8281 2.71603 18.5653 2.97888 18.2422 2.97888Z" fill="currentColor"></path>
                                        </svg>
                                        Design
                                        <i style={{ position: 'relative', right: '0', left: '50px', fontSize: '13px'}} class="bi bi-chevron-right"></i>
                                    </div>
                                </a>
                                <div className="dropdown-menu ps-3 top-0 pe-0 py-0 shadow-none bg-transparent">
                                    <div className="dropdown-menu-md bg-primary rounded dropdown-menu-inner">
                                        <a href="#" className="dropdown-item">
                                            All Business
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Finance
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Entrepreneurship
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Communications
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Management
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Sales
                                        </a>
                                        <a href="#" className="dropdown-item">
                                            Operations
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    );
}