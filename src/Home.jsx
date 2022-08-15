import React from "react";
import Navbar from "./Components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar name="Home" />
      <section className="background firstSection">
        <div className="box-main">
          <div className="firstHalf">
            <p className="text-big">The Future of Education is here !</p>
            <p className="text-small">
              In this World of 7 Billion People, We need to educate all of
              them.This is the future of an educated world and we are proud to
              say that the Future of Education is here.
            </p>
            <div className="buttons">
              <button className="btn">Subscribe</button>
              <button className="btn">Watch Video</button>
            </div>
          </div>
          <div className="secondHalf">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylvxTbvEPQvWsj4A2G16dsAq92W0mZWihsQ&usqp=CAU"
              alt="logo"
            />
          </div>
        </div>
      </section>
      <section className="secRight">
        <div className="paras">
          <p className="sectionTag text-big">
            The End of Your Search is here !!
          </p>
          <p className="sectionSubTag text-small">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            esse est deleniti hic earum eos tenetur perferendis vero ad iure
            omnis soluta exercitationem, accusamus nam ratione harum, nostrum,
            perspiciatis porro molestiae voluptatibus repudiandae cupiditate!
            Qui, veritatis error aliquid ex nostrum corporis ut eum laboriosam
            eius sequi, voluptas quis dolore tempore totam hic rem esse
            doloribus eaque sint! Minus perferendis nostrum temporibus incidunt
            ullam quod suscipit, quo autem, consequuntur architecto inventore
            nihil aliquam tempore, ipsa quidem fugiat veritatis.
          </p>
        </div>
        <div className="thumbnail">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRytX0WLTBgf-Ni1cTVfsTisoSCO6SMsI5tKQ&usqp=CAU"
            alt=""
          />
        </div>
      </section>

      <section className="secLeft">
        <div className="paras">
          <p className="sectionTag text-big">
            Education is the key to success !!
          </p>
          <p className="sectionSubTag text-small">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            esse est deleniti hic earum eos tenetur perferendis vero ad iure
            omnis soluta exercitationem, accusamus nam ratione harum, nostrum,
            perspiciatis porro molestiae voluptatibus repudiandae cupiditate!
            Qui, veritatis error aliquid ex nostrum corporis ut eum laboriosam
            eius sequi, voluptas quis dolore tempore totam hic rem esse
            doloribus eaque sint! Minus perferendis nostrum temporibus incidunt
            ullam quod suscipit, quo autem, consequuntur architecto inventore
            nihil aliquam tempore, ipsa quidem fugiat veritatis.
          </p>
        </div>
        <div className="thumbnail">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQweF-1KKKzGE4hcNI5sOEzAUnTZ1bjsRlvyg&usqp=CAU"
            alt=""
          />
        </div>
      </section>

      <section className="secRight">
        <div className="paras">
          <p className="sectionTag text-big">No Pains | No Gains !!</p>
          <p className="sectionSubTag text-small">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
            esse est deleniti hic earum eos tenetur perferendis vero ad iure
            omnis soluta exercitationem, accusamus nam ratione harum, nostrum,
            perspiciatis porro molestiae voluptatibus repudiandae cupiditate!
            Qui, veritatis error aliquid ex nostrum corporis ut eum laboriosam
            eius sequi, voluptas quis dolore tempore totam hic rem esse
            doloribus eaque sint! Minus perferendis nostrum temporibus incidunt
            ullam quod suscipit, quo autem, consequuntur architecto inventore
            nihil aliquam tempore, ipsa quidem fugiat veritatis.
          </p>
        </div>
        <div className="thumbnail">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr_j4lFoGmPVSjC-0b02kRypfjfmA2uHNlaw&usqp=CAU"
            alt=""
          />
        </div>
      </section>
      <footer class="background">
        <p class="text-footer">
          copyright &copy; 2027 www.Wave.com All rights Reserved
        </p>
      </footer>
    </>
  );
}
