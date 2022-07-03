import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';

import Link from '../components/Link';
import Seo from '../components/Seo';

const SkoromovkyPage = () => {
  return (
    <>
      <Seo
        title="Скоромовки"
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <h1 className="typo-h1">
            скоромовки
          </h1>
          <p className="typo-body mt-4 max-w-2xl">
            Скоромовка, швидкомовка або чистомовка — жанр як фольклорного, так і літературного походження: дотепна гра спеціально скомпонованих важковимовних слів, і звуків, що створюють труднощі для швидкої й виразної вимови слів.
          </p>
        </div>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h3">
          Б
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Бабин біб розцвів у дощ,
              <br />
              Буде бабі біб у борщ.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Босий хлопець сіно косить,
              <br />
              Роса росить ноги босі.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Був бик тупогуб,
              <br />
              Тупогубенький бичок.
              <br />
              У бика була тупа губа.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Був господар, був господар,
              <br />
              Да й розгосподарився.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Бук бундючивсь перед дубом,
              <br />
              Тряс над дубом бурим чубом.
              <br />
              Дуб пригнув до чуба бука —
              <br />
              Буде букові наука.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Був собі цебер, та переполуцебрився
              <br />
              на полуцебренята.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          В
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Варка варила вареника,
              <br />
              Василь взяв вареника.
              <br />
              Варка Василя варехою.
              <br />
              Василь Варку вареником.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              В домі Діми дим.
              <br />
              Ой ходім туди, ходім.
              <br />
              Рятувати Дімин дім.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Вовк-вовцюг вівцю волік.
              <br />
              Вова вовку — вила в бік.
              <br />
              Як завив же вовк-вовцюг,
              <br />
              Миттю випустив вівцю.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Ворона проворонила вороненя.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              В нас надворі погода розмокропогодилася.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          І
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Ішли жінки із базару, забалакались про покришки і про покришенята.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Ішов Прокіп, кипів окріп, прийшов Прокіп —
              кипить окріп, як при Прокопі, так і при Прокописі
              і при Прокопенятах.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          К
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Кіт котові каже.
              <br />
              — Коте, до комори кадуб вкотили.
              <br />
              В кадуб вкинеш капустину,
              <br />
              Кілька китичок калини.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Ковпак на ковпаку, під ковпаком — ковпак.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          Л
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Летів горобець, сів на хлівець,
              <br />
              А як вийшов стрілець, то утік горобець.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Летів горобець через безверхий хлівець.
              <br />
              Вхопив гороху, без червотоку,
              <br />
              Без червоточини, без прачервоточини.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Летів горобчик, сів на стовбчик,
              <br />
              Прибіг хлопчик, утік горобчик.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          Н
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Надворі трава,
              <br />
              На траві дрова.
              <br />
              Не рубай дрова,
              <br />
              Бо трава здорова.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Наш садівник розсадівникувався.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Невеличка перепеличка під полукіпком розпідпадьомкалась.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Не клюй, курко, крупку,
              <br />
              Не кури, турку, люльку.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          П
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Пилип посіяв просо,
              <br />
              Просо поспіло,
              <br />
              Пташки прилетіли,
              <br />
              Просо поїли,
              <br />
              Пилип плаче.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Пиляв Пилип поліна з лип,
              <br />
              Притупив пилку Пилип.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Пік біля кіп картоплю Прокіп.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Прийшов Прокіп, налляв окріп.
              <br />
              Іде Гаврило — ще не зварилось,
              <br />
              Прийшов Денис — налляв сім мис.
              <br />
              Прийшов Тарас — з’їв все нараз.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          Р
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Раз — дрова, два — дрова, три — дрова.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Розкажу вам про покупки, про покупки, про покупки, про покупочки мої.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Росте липа біля Пилипа.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          С
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Серед корчів корч найкорчакуватіший.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Сів шпак на шпаківню,
              <br />
              Заспівав шпак півню:
              <br />
              — Ти не вмієш так, як я,
              <br />
              Я не вмію так, як ти.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Стоїть піп на копі,
              <br />
              Копа під попом,
              <br />
              Піп під ковпаком.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          У
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Улас у нас, Панас у вас.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              У садочку барвінок,
              <br />
              На барвінку — втінок.
              <br />
              Заберімо втінок,
              <br />
              Вирвімо барвінок.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          Х
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Хитру сороку
              <br />
              Спіймати морока,
              <br />
              А на сорок сорок
              <br />
              Сорок морок.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Ходить квочка коло кілочка,
              <br />
              Водить діточок, коло квіточок.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Ходить посмітюха по сміттю з маленькими
              посмітюшенятами.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Ходить Прокіп — руками тіп.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Хто про Прокопа, хто про Прокопиху,
              <br />
              хто про Прокопових дітей.
            </p>
          </div>
        </div>
        <h2 className="typo-h3 mt-14">
          Ч
        </h2>
        <div className="row">
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Через грядку гріб тхір ямку.
            </p>
          </div>
          <div className="col-full md:col-4 mt-4">
            <span className="typo-body">
              ***
            </span>
            <p className="typo-body">
              Чорний баран, рябе ярча.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkoromovkyPage;
