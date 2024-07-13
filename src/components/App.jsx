import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const DECIMAL_PATTERN = /^\d+(\.\d+)?$/;
// const convertingToNumber = str => {
//   let num = parseFloat(str);
//   num = Math.floor(num * 10) / 10;
//   return num;
// };

const convertingToNumber = str => {
  return Math.floor(parseFloat(str) * 10) / 10;
};

const dailyNormaRecomendCalculation = (gender, weight, sport) => {
  if (!weight) return 1.8;
  if (!sport) sport = 0;
  const baseValue = gender === 'female' ? 0.03 : 0.04;
  const sportValue = gender === 'female' ? 0.4 : 0.6;
  return (weight * baseValue + sport * sportValue).toFixed(1);
};

const schema = yup.object().shape({
  gender: yup.string().oneOf(['female', 'male']),
  weight: yup
    .string()
    .matches(DECIMAL_PATTERN, 'please enter a positive number')
    .notRequired(),
  sportTime: yup
    .string()
    .matches(DECIMAL_PATTERN, 'please enter a positive number')
    .notRequired(),
  dayliNorma: yup
    .string()
    .matches(DECIMAL_PATTERN, 'please enter a positive number')
    .notRequired(),
});

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      gender: 'female',
      weight: null,
      sportTime: null,
      dayliNorma: null,
    },
  });

  const genderValue = watch('gender');
  const weightNumber = convertingToNumber(watch('weight'));
  const sportTimeNumber = convertingToNumber(watch('sportTime'));
  const dayliNormaNumber = convertingToNumber(watch('dayliNorma'));

  const dayliNormaRecomended = dailyNormaRecomendCalculation(
    genderValue,
    weightNumber,
    sportTimeNumber
  );

  const onSubmit = data => {
    console.log(data);

    const formData = new FormData();

    Object.keys(data).forEach(key => {
      switch (key) {
        case 'gender':
          return formData.append(key, data[key]);
        case 'weight':
          if (weightNumber) {
            formData.append(key, weightNumber);
          }
          break;
        case 'sportTime':
          if (sportTimeNumber) {
            formData.append(key, sportTimeNumber);
          }
          break;
        case 'dayliNorma':
          if (!dayliNormaNumber) {
            return formData.append(key, dayliNormaRecomended);
          }
          return formData.append(key, dayliNormaNumber);
      }
    });

    console.log(...formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Your gender identity</label>
        <input type="radio" value="female" {...register('gender')} /> Woman
        <input type="radio" value="male" {...register('gender')} /> Man
        <p>{errors.gender?.message}</p>
      </div>

      <div>
        <label>Your weight in kilograms:</label>
        <input type="string" {...register('weight')} />
        <p>{errors.weight?.message}</p>
        <i>
          {weightNumber}, {typeof weightNumber}
        </i>
      </div>

      <div>
        <label>The time of active participation in sports:</label>
        <input type="string" {...register('sportTime')} />
        <p>{errors.sportTime?.message}</p>
        <i>
          {sportTimeNumber}, {typeof sportTimeNumber}
        </i>
      </div>

      <div>
        <p style={{ color: 'blue' }}>
          The required amount of water in liters per day:
          {dayliNormaRecomended}l
        </p>
        <label>Write down how much water you will drink:</label>
        <input
          type="string"
          {...register('dayliNorma')}
          placeholder={dayliNormaRecomended}
        />
        <p>{errors.dayliNorma?.message}</p>
        <i>
          {dayliNormaNumber}, {typeof dayliNormaNumber}
        </i>
      </div>

      <input type="submit" />
    </form>
  );
}

// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';

// const DECIMAL_PATTERN = /^\d+(\.\d+)?$/;
// const convertingToNumber = str => {
//   let num = parseFloat(str);
//   num = Math.round(num * 10) / 10;
//   return num;
// };

// const dailyNormaRecomendCalculation = (gender, weight = 0, sport = 0) => {
//   if (!weight) return 1.8;
//   switch (gender) {
//     case 'female':
//       console.log(gender, weight, sport);
//       return (weight * 0.03 + sport * 0.4).toFixed(1);
//     case 'male':
//       return (weight * 0.04 + sport * 0.6).toFixed(1);
//   }
// };

// const schema = yup.object().shape({
//   gender: yup.string().oneOf(['female', 'male']),
//   weight: yup
//     .string()
//     .matches(DECIMAL_PATTERN, 'please enter a positive number')
//     .notRequired(),
//   sportTime: yup
//     .string()
//     .matches(DECIMAL_PATTERN, 'please enter a positive number')
//     .notRequired(),
//   dayliNorma: yup
//     .string()
//     .matches(DECIMAL_PATTERN, 'please enter a positive number')
//     .notRequired(),
// });

// export default function App() {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//     defaultValues: {
//       gender: 'female',
//       weight: null,
//       sportTime: null,
//       dayliNorma: null,
//     },
//   });
//   const onSubmit = data => console.log(data);

//   const genderValue = watch('gender');
//   const weightNumber = convertingToNumber(watch('weight'));
//   const sportTimeNumber = convertingToNumber(watch('sportTime'));
//   const dayliNormaNumber = convertingToNumber(watch('dayliNorma'));

//   const dayliNormaRecomended = dailyNormaRecomendCalculation(
//     genderValue,
//     weightNumber,
//     sportTimeNumber
//   );
//   console.log(dayliNormaRecomended);

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div>
//         <label>Your gender identity</label>
//         <input type="radio" value="female" {...register('gender')} /> Woman
//         <input type="radio" value="male" {...register('gender')} /> Man
//         <p>{errors.gender?.message}</p>
//       </div>

//       <div>
//         <label>Your weight in kilograms:</label>
//         <input type="string" {...register('weight')} />
//         <p>{errors.weight?.message}</p>
//         <i>
//           {weightNumber}, {typeof weightNumber}
//         </i>
//       </div>

//       <div>
//         <label>The time of active participation in sports:</label>
//         <input type="string" {...register('sportTime')} />
//         <p>{errors.sportTime?.message}</p>
//         <i>
//           {sportTimeNumber}, {typeof sportTimeNumber}
//         </i>
//       </div>

//       <div>
//         <p style={{ color: 'blue' }}>
//           The required amount of water in liters per day:
//           {dayliNormaRecomended}l
//         </p>
//         <label>Write down how much water you will drink:</label>
//         <input
//           type="string"
//           {...register('dayliNorma')}
//           // placeholder={dailyNormaRecomen}
//           value={dayliNormaRecomended}
//         />
//         <p>{errors.dayliNorma?.message}</p>
//         <i>
//           {dayliNormaNumber}, {typeof dayliNormaNumber}
//         </i>
//       </div>

//       <input type="submit" />
//     </form>
//   );
// }
