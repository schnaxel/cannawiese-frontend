import React from "react";
import Image from "next/image";

export default function Home() {
  return (
          <section className={'h-100 bg-secondary-light'}>
              <div className={'container h-100'}>
                  <div className="row h-100">
                      <div className="col-12 d-flex align-items-center justify-content-center h-100">
                          <Image src="/images/logoCannawiese.png" alt="Logo Cannawiese" width={'350'} height={'202'}
                                 className={"d-inline-block align-text-top"} draggable={"false"}></Image>
                      </div>
                  </div>
              </div>
          </section>
  )
}