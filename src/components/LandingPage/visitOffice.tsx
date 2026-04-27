"use client";

export default function VisitOffice() {
    return (
        <section className="w-full grid grid-cols-1 lg:grid-cols-2 bg-[#F5F4F7] rounded-4xl overflow-hidden">


            <div className=" px-6 md:px-24 py-16 flex flex-col gap-8">

                <div>
                    <h2 className="text-xl md:text-3xl font-bold text-[#000000] mb-4">
                        Visit Our Office
                    </h2>

                    <p className="text-[#000000] text-xl  max-w-86.25 ">
                        From first plans to final finishes, Our staffs are here to help with
                        honest advice and local expertise
                    </p>
                </div>


                <div className="bg-white rounded-lg p-5 flex items-center gap-4 md:mt-18.5">
                    <div>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#E4E4E6" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.3984 15.2V24.8C10.3984 26.12 11.4724 27.2 12.7984 27.2H27.1984C28.5184 27.2 29.5984 26.126 29.5984 24.8V15.2C29.5984 13.88 28.5244 12.8 27.1984 12.8H12.7984C11.4784 12.8 10.3984 13.874 10.3984 15.2ZM11.5984 24.8V16.256L19.6864 21.116C19.7798 21.1721 19.8866 21.2017 19.9954 21.2017C20.1043 21.2017 20.2111 21.1721 20.3044 21.116L28.3924 16.256V24.8C28.3924 25.1183 28.266 25.4235 28.041 25.6486C27.8159 25.8736 27.5107 26 27.1924 26H12.7924C12.4742 26 12.169 25.8736 11.9439 25.6486C11.7189 25.4235 11.5924 25.1183 11.5924 24.8H11.5984ZM27.1984 14C27.4609 14 27.7162 14.086 27.9251 14.2448C28.1341 14.4037 28.2852 14.6267 28.3552 14.8796L20.0032 19.8956L11.6512 14.8796C11.7213 14.6267 11.8724 14.4037 12.0813 14.2448C12.2903 14.086 12.5456 14 12.808 14H27.208H27.1984Z" fill="black" />
                        </svg>

                    </div>
                    <div>
                        <p className="text-sm text-[#000000] font-normal">
                            For detailed inquiries or documents:
                        </p>
                        <p className="font-semibold text-[#000000] text-base  ">
                            dcc@zechoil.com
                        </p>
                    </div>
                </div>


                <div className="bg-white rounded-lg p-5 flex items-start gap-4 ">
                    <div >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#E4E4E6" />
                            <path d="M19.0403 11.8403C18.0219 11.8403 17.0452 12.2449 16.325 12.965C15.6049 13.6852 15.2003 14.6619 15.2003 15.6803C15.2003 16.6988 15.6049 17.6755 16.325 18.3956C17.0452 19.1158 18.0219 19.5203 19.0403 19.5203C20.0587 19.5203 21.0355 19.1158 21.7556 18.3956C22.4757 17.6755 22.8803 16.6988 22.8803 15.6803C22.8803 14.6619 22.4757 13.6852 21.7556 12.965C21.0355 12.2449 20.0587 11.8403 19.0403 11.8403ZM16.1603 15.6803C16.1603 14.9165 16.4637 14.184 17.0038 13.6439C17.5439 13.1038 18.2765 12.8003 19.0403 12.8003C19.8041 12.8003 20.5367 13.1038 21.0768 13.6439C21.6169 14.184 21.9203 14.9165 21.9203 15.6803C21.9203 16.4442 21.6169 17.1767 21.0768 17.7168C20.5367 18.2569 19.8041 18.5603 19.0403 18.5603C18.2765 18.5603 17.5439 18.2569 17.0038 17.7168C16.4637 17.1767 16.1603 16.4442 16.1603 15.6803ZM14.249 20.4803C13.9961 20.4792 13.7455 20.528 13.5115 20.624C13.2776 20.72 13.0649 20.8612 12.8857 21.0396C12.7065 21.218 12.5643 21.4301 12.4673 21.6636C12.3703 21.8971 12.3203 22.1475 12.3203 22.4003C12.3203 24.0237 13.12 25.2477 14.3699 26.0455C15.6006 26.8298 17.2595 27.2003 19.0403 27.2003C19.3834 27.2003 19.7213 27.1866 20.0541 27.1591C19.9812 26.8414 19.9829 26.5112 20.0589 26.1943C19.7293 26.225 19.3898 26.2403 19.0403 26.2403C17.3747 26.2403 15.9136 25.8909 14.8864 25.2352C13.8784 24.592 13.2803 23.6579 13.2803 22.4003C13.2803 21.8695 13.7104 21.4403 14.249 21.4403H23.3824C23.3719 21.1877 23.4128 20.9356 23.5024 20.6992L23.585 20.4803H14.249ZM24.401 21.0391L24.6726 20.3191C24.9203 19.6653 25.6922 19.3427 26.343 19.6202L26.7155 19.7795C27.1696 19.9735 27.545 20.3248 27.6246 20.7971C28.0634 23.4131 25.793 27.1341 23.1798 28.0835C22.7075 28.2544 22.1978 28.1219 21.7926 27.8474L21.4605 27.6218C21.3241 27.5299 21.2093 27.4096 21.1239 27.269C21.0386 27.1285 20.9848 26.9711 20.9661 26.8078C20.9475 26.6444 20.9646 26.4789 21.0161 26.3228C21.0676 26.1667 21.1524 26.0236 21.2646 25.9034L21.7878 25.3207C21.9107 25.1853 22.0675 25.0852 22.242 25.0307C22.4165 24.9762 22.6024 24.9693 22.7805 25.0106L23.9565 25.289C24.889 24.7066 25.3888 23.8874 25.456 22.8314L24.6131 22.0067C24.4872 21.8837 24.4001 21.7265 24.3624 21.5546C24.3247 21.3827 24.3381 21.2035 24.401 21.0391Z" fill="black" />
                        </svg>

                    </div>
                    <div>
                        <p className="text-sm text-[#000000] font-normal">
                            Prefer to talk it through? Call our project lead:
                        </p>
                        <p className="font-semibold text-[#000000] text-base  ">
                            dcc@zechoil.com
                        </p>
                        <p  className="text-sm text-[#000000] font-normal mt-1">
                            Mon–Fri: 8am–6pm
                        </p>
                    </div>
                </div>


                <div className="bg-white rounded-lg p-5 flex items-center gap-4 ">
                    <div >
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="40" height="40" rx="20" fill="#E4E4E6" />
                            <path d="M20.0016 20.8C21.327 20.8 22.4016 19.7255 22.4016 18.4C22.4016 17.0745 21.327 16 20.0016 16C18.6761 16 17.6016 17.0745 17.6016 18.4C17.6016 19.7255 18.6761 20.8 20.0016 20.8Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.0016 12C18.3042 12 16.6763 12.6743 15.4761 13.8745C14.2758 15.0747 13.6016 16.7026 13.6016 18.4C13.6016 19.9136 13.9232 20.904 14.8016 22L20.0016 28L25.2016 22C26.08 20.904 26.4016 19.9136 26.4016 18.4C26.4016 16.7026 25.7273 15.0747 24.527 13.8745C23.3268 12.6743 21.6989 12 20.0016 12Z" stroke="black" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </div>
                    <div>
                        <p className="text-sm text-[#000000] font-normal">Visit us at:</p>
                        <p className="font-semibold text-gray-900 text-base leading-relaxed">
                           
                           Plot 93, Rumuogba Rumuogba Estate,  <br />
                            Port Harcourt Rivers State NigeriaPlot 93, Rumuogba Rumuogba Estate, Port  <br />
                             Harcourt Rivers State Nigeria
                        </p>
                    </div>
                </div>
            </div>


            <div className="w-full h-100 lg:h-auto">
                <iframe
                    src="https://www.google.com/maps?q=Rumuogbat+Rivers+State+Nigeria&output=embed"
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

        </section>
    );
}