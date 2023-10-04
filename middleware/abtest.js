export default function ({ route, redirect }) {
  if (route.fullPath === '/?abtest=test') {
    const variants = ['/variantOne', '/variantTwo'];
    const randomIndex = Math.floor(Math.random() * variants.length);
    const randomVariant = variants[randomIndex];

    return redirect(randomVariant);
  }
}
