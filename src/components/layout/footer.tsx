import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

export const FooterSection = () => {
    return (
        // shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card
        <footer id="footer" className="container py-1 sm:py-2 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl mx-auto">
            <div className="p-10 bg-card border border-secondary rounded-2xl">
                <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
                    <div className="col-span-full xl:col-span-2">
                        <Link to="#" className="flex font-bold items-center">
                            <img src="/logo-icon.svg" alt="Main logo" className="w-9 h-9 mr-2" />
                            <h3 className="text-2xl">Ai Trip Planner</h3>
                        </Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Contact</h3>
                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                Github
                            </Link>
                        </div>

                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                Twitter
                            </Link>
                        </div>

                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                Instagram
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Platforms</h3>
                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                iOS
                            </Link>
                        </div>

                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                Android
                            </Link>
                        </div>

                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                Web
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Help</h3>
                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                Contact Us
                            </Link>
                        </div>

                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                FAQ
                            </Link>
                        </div>

                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                Feedback
                            </Link>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h3 className="font-bold text-lg">Socials</h3>
                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                Twitch
                            </Link>
                        </div>

                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                Discord
                            </Link>
                        </div>

                        <div>
                            <Link to="#" className="opacity-60 hover:opacity-100">
                                Dribbble
                            </Link>
                        </div>
                    </div>
                </div>

                <Separator className="my-6" />
                <section className="">
                    <h3 className="">
                        &copy; 2024 Designed and developed by
                        <a
                            target="_blank"
                            href="https://github.com/dpertsin"
                            className="text-primary transition-all border-primary hover:border-b-2 ml-1"
                        >
                            dpertsin
                        </a>
                    </h3>
                </section>
            </div>
        </footer>
    );
};
