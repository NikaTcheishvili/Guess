import * as React from 'react';
import Svg, {
  SvgProps,
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from 'react-native-svg';
const Weary = (props: SvgProps) => (
  <Svg width={36} height={36} fill="none" viewBox="0 0 80 80" {...props}>
    <Path
      fill="url(#a)"
      d="M40.475 70.95c16.83 0 30.475-13.644 30.475-30.475C70.95 23.645 57.306 10 40.475 10 23.645 10 10 23.644 10 40.475c0 16.83 13.644 30.475 30.475 30.475Z"
    />
    <Path
      fill="url(#b)"
      d="M40.475 70.95c16.83 0 30.475-13.644 30.475-30.475C70.95 23.645 57.306 10 40.475 10 23.645 10 10 23.644 10 40.475c0 16.83 13.644 30.475 30.475 30.475Z"
      opacity={0.5}
    />
    <Path
      fill="url(#c)"
      d="M20.688 24.132c-.057 1.219 1.219 2.041 3.486 2.154 1.928.085 6.209-.765 9.313-4.38.567-.666-.241-1.09-.794-.666-1.87 1.432-6.761 3.161-10.489 2.58-1.488-.227-1.517.312-1.517.312Z"
    />
    <Path
      fill="url(#d)"
      d="M19.724 31.786a.685.685 0 0 1 .567-.737c1.899-.34 5.386-.227 8.901.284 2.778.396 6.733 2.664 6.86 3.912.142 1.389-3.033 3.727-4.393 4.663-2.14 1.474-5.075 3.118-6.89 3.288-.481.043-.736-.198-.835-.439-.128-.34.056-.737.467-1.006 4.394-2.835 7.116-5.287 6.875-6.039 0 0-.213-1.219-3.983-1.984-2.296-.468-4.706-.709-6.18-.822-.893-.1-1.347-.596-1.39-1.12Z"
    />
    <Path
      fill="url(#e)"
      d="M20.305 31.063c1.9-.34 5.344-.623 8.901.284 3.26.836 6.733 2.664 6.86 3.912.086.808-.949 1.928-2.097 2.92-.043.042-.085.07-.128.113l-.014.014c.865-1.474 1.163-2.99-.921-4.195-1.318-.766-5.259-3.104-13.154-2.325a.632.632 0 0 1 .553-.723Z"
    />
    <Path
      fill="url(#f)"
      d="M23.933 42.771c-.127-.34.057-.737.468-1.006 4.394-2.835 7.116-5.287 6.875-6.038.41 1.261.581 1.899-3.02 4.351-2.678 1.814-3.968 2.608-3.486 3.133-.482.056-.752-.185-.837-.44Z"
    />
    <Path
      fill="url(#g)"
      d="M30.142 63.92c4.677-1.361 7.059-2.254 10.333-2.254s5.656.893 10.333 2.254c4.337 1.261 6.79-1.375 6.294-5.203-1.701-8.05-8.987-14.245-16.613-14.245-7.413 0-14.486 5.698-16.456 13.367-1.035 4.294 1.445 7.441 6.109 6.08Z"
    />
    <Path
      fill="url(#h)"
      d="M24.018 59.058c1.97-6.209 9.044-8.32 16.457-8.32 7.626 0 14.911 2.508 16.612 9.028.015.085.029.185.057.284.028-.425 0-.865-.057-1.332-1.7-8.052-8.986-14.246-16.612-14.246-7.413 0-14.486 5.698-16.457 13.367-.155.666-.24 1.318-.226 1.913.099-.255.17-.496.226-.694Z"
    />
    <Path
      fill="url(#i)"
      d="M60.263 24.132c.056 1.219-1.22 2.041-3.487 2.154-1.928.085-6.209-.765-9.313-4.38-.567-.666.241-1.09.794-.666 1.87 1.432 6.761 3.161 10.489 2.58 1.488-.227 1.517.312 1.517.312Z"
    />
    <Path
      fill="url(#j)"
      d="M61.226 31.786a.685.685 0 0 0-.567-.737c-1.899-.34-5.386-.227-8.901.284-2.778.396-6.733 2.664-6.86 3.912-.142 1.389 3.033 3.727 4.393 4.663 2.14 1.474 5.075 3.118 6.89 3.288.481.043.736-.198.836-.439.127-.34-.057-.737-.468-1.006-4.394-2.835-7.116-5.287-6.875-6.039 0 0 .213-1.219 3.983-1.984 2.297-.468 4.706-.709 6.18-.822.893-.1 1.347-.596 1.39-1.12Z"
    />
    <Path
      fill="url(#k)"
      d="M60.645 31.063c-1.9-.34-5.344-.623-8.901.284-3.26.836-6.733 2.664-6.86 3.912-.086.808.949 1.928 2.097 2.92.042.042.085.07.128.113l.014.014c-.865-1.474-1.162-2.99.921-4.195 1.318-.766 5.259-3.104 13.154-2.325a.632.632 0 0 0-.553-.723Z"
    />
    <Path
      fill="url(#l)"
      d="M57.017 42.771c.127-.34-.057-.737-.468-1.006-4.394-2.835-7.116-5.287-6.875-6.038-.41 1.261-.58 1.899 3.02 4.351 2.678 1.814 3.968 2.608 3.486 3.133.482.056.752-.185.837-.44Z"
    />
    <Path
      fill="url(#m)"
      d="M40.475 49.178c4.366 0 8.632 1.177 12.218 3.133-2.976-3.898-7.526-6.492-12.218-6.492-4.734 0-9.313 2.551-12.29 6.463a26.164 26.164 0 0 1 12.29-3.104Z"
    />
    <Path
      fill="url(#n)"
      d="M54.054 62.7c-2.07-3.756-7.3-6.435-13.437-6.435-6.18 0-11.425 2.693-13.466 6.478.723.198 1.616.17 2.636-.113.752-.213 1.432-.426 2.084-.61 3.416-1.02 5.684-1.7 8.618-1.7s5.202.68 8.618 1.7c.638.199 1.333.397 2.084.61 1.105.34 2.098.354 2.863.07Z"
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(34.479 28.125) scale(36.7641)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFDF30" />
        <Stop offset={1} stopColor="#FFB82E" />
      </RadialGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(34.479 28.125) scale(28.924)"
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFE95F" />
        <Stop offset={1} stopColor="#FFBB47" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(1.29518 -7.05003 4.56086 .83789 28.204 36.566)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#7A4400" />
        <Stop offset={1} stopColor="#643800" />
      </RadialGradient>
      <RadialGradient
        id="g"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(10.78 0 0 8.67641 39.071 54.547)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#7A4400" />
        <Stop offset={1} stopColor="#643800" />
      </RadialGradient>
      <RadialGradient
        id="j"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-100.41 41.604 -3.689) scale(7.16801 4.63719)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#7A4400" />
        <Stop offset={1} stopColor="#643800" />
      </RadialGradient>
      <RadialGradient
        id="m"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="translate(40.437 49.057) scale(14.4972)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#fff" />
        <Stop offset={1} stopColor="#A8BBBD" />
      </RadialGradient>
      <RadialGradient
        id="n"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(13.1309 0 0 2.93082 40.537 59.292)"
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.248} stopColor="red" />
        <Stop offset={1} stopColor="#C10000" />
      </RadialGradient>
      <LinearGradient
        id="c"
        x1={25.463}
        x2={27.685}
        y1={27.541}
        y2={21.482}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#3C2200" />
        <Stop offset={1} stopColor="#7A4400" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={35.912}
        x2={20.091}
        y1={33.764}
        y2={35.352}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#3C2200" />
        <Stop offset={1} stopColor="#512D00" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={32.056}
        x2={23.353}
        y1={38.176}
        y2={40.977}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#3C2200" />
        <Stop offset={1} stopColor="#512D00" />
      </LinearGradient>
      <LinearGradient
        id="h"
        x1={23.793}
        x2={57.154}
        y1={52.266}
        y2={52.266}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#3C2200" />
        <Stop offset={1} stopColor="#512D00" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={55.486}
        x2={53.265}
        y1={27.542}
        y2={21.483}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#3C2200" />
        <Stop offset={1} stopColor="#7A4400" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={45.041}
        x2={60.862}
        y1={33.765}
        y2={35.352}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#3C2200" />
        <Stop offset={1} stopColor="#512D00" />
      </LinearGradient>
      <LinearGradient
        id="l"
        x1={48.893}
        x2={57.597}
        y1={38.178}
        y2={40.978}
        gradientUnits="userSpaceOnUse">
        <Stop offset={0.001} stopColor="#3C2200" />
        <Stop offset={1} stopColor="#512D00" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Weary;
