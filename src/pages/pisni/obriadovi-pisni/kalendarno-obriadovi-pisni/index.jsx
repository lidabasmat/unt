import React from 'react';
import Breadcrumbs from '../../../../components/Breadcrumbs';
import Link from '../../../../components/Link';
import Seo from '../../../../components/Seo';

const KalendarnoObriadoviPisniPage = ({ pageContext }) => {
  return (
    <>
      <Seo
        title="Календарно-обрядові пісні"
        description="Календарно-обрядові пісні — фольклорні твори, які виконувались під час різних народних свят та обрядів."
      />
      <div className="bg-red-500 text-white">
        <div className="container-lg py-10 md:py-24">
          <Breadcrumbs
            crumbs={pageContext.breadcrumb.crumbs}
          />
          <h1 className="typo-h1 lowercase mt-4">
            календарно-обрядові пісні
          </h1>
          <p className="typo-body mt-4 max-w-lg">
            Календарно-обрядові пісні — фольклорні твори, які виконувались під час різних народних свят та обрядів.
          </p>
        </div>
      </div>
      <div className="container-lg mt-10 md:mt-24">
        <h2 className="typo-h2">
          Жанри календарно-обрядових пісень
        </h2>
        <ul className="mt-10">
          <li className="typo-h4">
            <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/koliadky-ta-shchedrivky/">
              Колядки та щедрівки
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/vesnianky/">
              Веснянки
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/rusalni-ta-petrivchani-pisni/">
              Русальні та петрівчані пісні
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/kupalski-pisni/">
              Купальскі пісні
            </Link>
          </li>
          <li className="typo-h4 mt-4">
            <Link to="/pisni/obriadovi-pisni/kalendarno-obriadovi-pisni/zhnyvarski-pisni/">
              Жниварські пісні
            </Link>
          </li>
        </ul>
      </div>
      <div className="container-lg py-10 md:py-24">
        <h2 className="typo-h2">
          Опис жанру календарно-обрядової пісні
        </h2>
        <p className="typo-body mt-4">
          Календарно-обрядові пісні тісно зв'язані з язичницькими віруваннями. Слов'яни вірили в сили природи, в духів природи та вважали, що обрядовими піснями можуть вплинути на них та примусити їх діяти в бажаному напрямку. Вони нерозривно пов'язані з певною порою року, відповідними звичаями й сільськогосподарськими роботами. Обрядова поезія дуже тісно зв'язана з працею людини, з родинним побутом та з народним календарем.
        </p>
      </div>
    </>
  );
};

export default KalendarnoObriadoviPisniPage;
